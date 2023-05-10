const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const arg = hideBin(process.argv);

yargs(arg)
  .usage('Usage: ken-cli <command> [options]')
  .strict()