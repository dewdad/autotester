/**
 * Debugger attached to particular target
 */

const thenChrome = require('then-chrome');
const Channel = require('chnl');
const logger = require('../../utils/logger').create('Debugger');

const PROTOCOL_VERSION = '1.1';

class Debugger {

  constructor () {
    this._target = null;
    this._onEvent = this._onEvent.bind(this);
    this._onDetach = this._onDetach.bind(this);
    this.onEvent = new Channel();
  }

  attach(target) {
    return thenChrome.debugger.attach(target, PROTOCOL_VERSION)
      .then(() => this._afterAttach(target));
  }

  sendCommand(name, params = {}) {
    logger.log(`Debugger command ${name}`, params);
    return thenChrome.debugger.sendCommand(this._target, name, params)
      .then(res => {
        logger.log(`Response to '${name}'`, res);
        return res;
      })
      .catch(prettyError);
  }

  detach() {
    // debugger can be automatically detached when target closes.
    // In that case second call of detach() should not fail
    if (this._target) {
      return thenChrome.debugger.detach(this._target)
        .then(() => this._afterDetach('self'));
    } else {
      return Promise.resolve();
    }
  }

  getTarget() {
    return this._target;
  }

  isAttachedTo(target) {
    if (!this._target || !target) {
      return false;
    }
    const sameTabId = this._target.tabId && this._target.tabId === target.tabId;
    const sameExtensionId = this._target.extensionId && this._target.extensionId === target.extensionId;
    return sameTabId || sameExtensionId;
  }

  _getTargetStr() {
    return JSON.stringify(this._target);
  }

  _afterAttach(target) {
    this._target = target;
    logger.log(`Attached to ${this._getTargetStr()}`);
    chrome.debugger.onEvent.addListener(this._onEvent);
    chrome.debugger.onDetach.addListener(this._onDetach);
  }

  _afterDetach(reason) {
    logger.log(`Detached from ${this._getTargetStr()} with reason '${reason}'`);
    this._target = null;
    chrome.debugger.onEvent.removeListener(this._onEvent);
    chrome.debugger.onDetach.removeListener(this._onDetach);
  }

  _onDetach(target, reason) {
    if (this.isAttachedTo(target)) {
      this._afterDetach(reason);
    }
  }

  _onEvent(target, method, params) {
    if (this.isAttachedTo(target)) {
      this.onEvent.dispatch(method, params);
    }
  }
}

function prettyError(e) {
  // convert debugger error into pretty one
  // debugger error is object with single key 'message'
  const isDebuggerError = typeof e === 'object' && Object.keys(e).length === 1 && e.message;
  if (isDebuggerError) {
    let prettyMessage = e.message;
    try {
      const parsed = JSON.parse(e.message);
      prettyMessage = `${parsed.message} ${parsed.data}`;
    } catch (e) {}
    return Promise.reject(new Error(`Debugger error '${prettyMessage}'`));
  } else {
    return Promise.reject(e);
  }
}

module.exports = Debugger;
