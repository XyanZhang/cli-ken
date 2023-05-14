import path from 'node:path';
import { program } from 'commander';
import { dirname } from 'dirname-filename-esm';
import semver from 'semver';
import chalk from 'chalk';
import fse from 'fs-extra';
import   {log } from '@cli-ken/utils';

const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = fse.readJsonSync(pkgPath);

const LOWEST_NODE_VERSION = '14.0.0';

function checkNodeVersion() {
  log.verbose('node version', process.version);
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(chalk.red(`cli-ken 需要安装 ${LOWEST_NODE_VERSION} 以上版本的 Node.js`));
  }
}

function preAction() {
  // 检查Node版本
  checkNodeVersion();
}

export function createCli() {
  log.info('version', pkg.version); 

  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false)
    .hook('preAction', preAction);

  //  program hook 解释
  //  hook 用于在执行命令之前执行一些操作，比如检查 Node 版本、检查是否是 root 用户等。
  //  hook 的第一个参数是 hook 名称，第二个参数是 hook 函数，hook 函数的第一个参数是 commander 对象，第二个参数是 hook 的上下文。
  //  hook 的第三个参数是一个可选的函数，用于在 hook 执行完毕后执行一些操作，比如打印一些信息。

  // hooks 有三个钩子，分别是：
  // 1. preAction：在执行命令之前执行，比如检查 Node 版本、检查是否是 root 用户等。
  // 2. action：执行命令时执行，比如执行 init 命令时执行。
  // 3. postAction：在执行命令之后执行，比如打印一些信息。

  // program.on 用于监听事件，第一个参数是事件名称，第二个参数是事件回调函数。
  program.on('option:debug', function() {
    console.log(program.opts());
    if (program.opts().debug) {
      log.verbose('debug', 'launch debug mode');
    }
  });

  program.on('command:*', function(obj) {
    log.error('未知的命令：' + obj[0]);
  });
  return program;
}
