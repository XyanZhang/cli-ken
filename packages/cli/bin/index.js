// 表示使用 node 运行，不需要指定 node.exe 的路径，会自动去环境变量中找

import importLocal from 'import-local'; // 作用：如果本地安装了 cli-ken，就使用本地的 cli-ken，否则使用全局的 cli-ken
import { log } from '@cli-ken/utils';
import { filename } from 'dirname-filename-esm';
import cliEntry from '../lib/index.js';

const __filename = filename(import.meta);

if (importLocal(__filename)) {
  log.info('cli', '使用本次 cli-ken 版本');
} else {
  cliEntry(process.argv.slice(2));
}
