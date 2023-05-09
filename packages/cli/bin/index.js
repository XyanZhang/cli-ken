// #!/usr/bin/env node 
// 表示用node执行该文件

const lib = require('@cli-ken/init')

// initM.init('hello');
// console.log('I\'m cli ken')

// 注册一个命令 init
const agrv = require('process').argv;
// console.log(agrv);
// 获取参数
let command = agrv[2];
console.log(command);
if(command) {
  // command = command.replace('--', '');
  if(lib[command]) {
    let options = agrv.slice(3);
    const [option, param] = options;
    let option2 = option.replace('--', '');
    lib[command](option2, param); // 根据参数执行命令
    // ken-cli init hello
    // 打印 I'm init ken from init hello
  }else {
    console.log('command not found');
  }
}else {
  console.log('no command');
}

// 实现参数解析