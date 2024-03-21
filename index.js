const deepDiff = require('deep-diff');
const chalk = require('chalk');
const moment = require('moment');

/**
 * Log differences between two objects.
 * @param {Object} lhs The left-hand side object.
 * @param {Object} rhs The right-hand side object.
 */
const logObjectDiffs = (lhs, rhs) => {
  const differences = deepDiff.diff(lhs, rhs);
  if (differences) {
    console.log(chalk.green(`Differences detected at ${moment().format('YYYY-MM-DD HH:mm:ss')}:`));
    differences.forEach((diff) => {
      console.log(chalk.yellow(`Path: ${diff.path.join('.')} | Kind: ${diff.kind}`));
      if (diff.kind === 'E') {
        console.log(chalk.red(`LHS: ${diff.lhs} | RHS: ${diff.rhs}`));
      } else if (diff.kind === 'N') {
        console.log(chalk.blue(`New value: ${diff.rhs}`));
      } else if (diff.kind === 'D') {
        console.log(chalk.magenta(`Deleted value: ${diff.lhs}`));
      }
    });
  } else {
    console.log(chalk.green('No differences found.'));
  }
};

module.exports = {
  logObjectDiffs
};

console.log(chalk.gray('Library: basic-object-diff-logger'));
console.log(chalk.gray('Version: 1.0.0'));
console.log(chalk.gray('Author: Your Name'));
console.log(chalk.gray('License: MIT'));
console.log(chalk.gray('Homepage: https://github.com/yourusername/basic-object-diff-logger'));
console.log(chalk.gray('Bug Tracker: https://github.com/yourusername/basic-object-diff-logger/issues'));
console.log(chalk.gray('Contributing Guide: https://github.com/yourusername/basic-object-diff-logger/blob/main/CONTRIBUTING.md'));
console.log(chalk.gray('API Documentation: https://github.com/yourusername/basic-object-diff-logger/blob/main/docs/API.md'));
console.log(chalk.gray('Changelog: https://github.com/yourusername/basic-object-diff-logger/blob/main/CHANGELOG.md'));
