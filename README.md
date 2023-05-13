# cli-ken

cli util

## 不同项目包之间本地引用

+ 先在一个包中 `npm link` 到全局 （注意只要在package.json中配置了bin字段，就会在全局生成可执行文件）
+ 再在另外一个包中 `npm link <package-name>`

取消link: `npm unlink <package-name>`

## 脚手架开发流程

### 开发流程

+ 创建 npm 项目
+ 创建脚手架入口文件，文件最上方添加`#!/usr/bin/env node`
+ 在package.json中配置bin字段，指向入口文件
+ 编写脚手架代码
+ 将脚手架发布到npm

### 使用

+ 安装脚手架 `npm i -g <package-name>`
+ 使用脚手架 `<package-name> <command>`

## 难点

### 分包

### 命令注册

### 参数解析

`vue command [options] <params>`

### 帮助文档

### 命令行交互

### 日志打印

### 命令行文字变色

### 网络通信

### 文件处理

### 尝试yargs 进行脚手架快速开发

### yargs 常用api

yargs.command(command, desc, builder, handler)：定义一个命令，参数依次为命令名、命令描述、命令参数配置、命令处理函数。
yargs.option(key, options)：定义一个命令行选项，参数依次为选项名和选项配置。
yargs.alias(key, alias)：为一个选项定义一个别名。
yargs.usage(usage)：定义命令的使用说明。
yargs.help()：输出命令的帮助信息。
yargs.version(version)：定义命令的版本号。
yargs.argv：解析命令行参数，返回一个包含所有选项和参数的对象。
