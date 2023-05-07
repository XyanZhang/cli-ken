# cli-ken

cli util

## 不同项目包之间本地引用

+ 先在一个包中 `npm link` 到全局 （注意只要在package.json中配置了bin字段，就会在全局生成可执行文件）
+ 再在另外一个包中 `npm link <package-name>`

取消link: `npm unlink <package-name>`
