import { createCli } from './createCli.js';
import createInitCommand from '@cli-ken/init'
import './exception.js';

export default function cliEntry() {
  let program = createCli();
  createInitCommand(program);
};