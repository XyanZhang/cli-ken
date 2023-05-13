const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers'); // 用于隐藏命令中的node和文件名
const arg = hideBin(process.argv); // 隐藏命令中的node和文件名 
// 比如  node "d:\code\project\cli-ken\packages\useYargs\index.js" -name ken
// 会隐藏只显示 -name ken
// arg 输出 [ '-name', 'ken' ]
// 而 process.argv 输出 [ 'D:\\Program Files\\nodejs\\node.exe','d:\\code\\project\\cli-ken\\packages\\useYargs\\index.js','-name','ken' ]

console.log(arg);

yargs(arg)
  .usage('Usage: ken-cli2 <command> [options]')
  .strict()

// yargs.command(command, desc, builder, handler)：定义一个命令，参数依次为命令名、命令描述、命令参数配置、命令处理函数。

// yargs.option(option, desc, config)：定义一个选项，参数依次为选项名、选项描述、选项配置。

// yargs.alias(alias, option)：定义选项别名，参数依次为选项别名、选项名。

// yargs.demandOption(option, desc)：定义必须的选项，参数依次为选项名、选项描述。

// yargs.usage(usage)：定义使用说明。

// yargs.example(example)：定义使用示例。

// yargs.strict()：严格模式，如果命令行中包含未定义的选项，会报错。

// yargs.help()：定义帮助命令。

// yargs.alias('h', 'help')：定义帮助命令别名。

// yargs.version(version)：定义版本号。

// yargs.alias('v', 'version')：定义版本号别名。

// yargs.parse()：解析命令行参数。

// yargs.argv：解析命令行参数，与yargs.parse()的区别是，yargs.argv会自动终止程序。

// yargs.showHelp()：显示帮助信息。

// yargs.showHelpOnFail(enable, message)：当解析失败时显示帮助信息，参数依次为是否显示、错误信息。

// yargs.exitProcess(enable)：当解析失败时退出程序，参数为是否退出。

// yargs.locale(locale)：设置语言。
