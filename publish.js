var ghpages = require('gh-pages');

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/embengineering/embengineering.github.io.git'
}, function() {});