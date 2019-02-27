var ghpages = require('gh-pages');

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish('build', {
  branch: 'master'
}, function() {});