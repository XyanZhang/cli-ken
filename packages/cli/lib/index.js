import { createCli } from './createCli.js';
import './exception.js';

export default function CliEntry() {
  const program = createCli();
  console.log(process.argv)
  program.parse(process.argv);
};

CliEntry();