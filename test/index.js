/**
 * This is index file loaded by autotester
 * Make sure to start selenium fileserver to serve static html pages
 * ```
 * npm run fileserver
 * ```
 *
 * This file is also used by node-runner to get actual tests.
 */

module.exports = {
  before: [
    'before.js',
  ],
  tests: [
    'specs/attach_to_extension_test.js',
    'specs/catch_network_requests_test.js',
    'specs/playground_test.js',
    // === own selenium specs from 'node_modules/selenium-webdriver/test' ===
    'specs-selenium/tag_name_test.js',
    'specs-selenium/actions_test.js',
    'specs-selenium/execute_script_test.js',
    'specs-selenium/element_finding_test.js',
  ]
};
