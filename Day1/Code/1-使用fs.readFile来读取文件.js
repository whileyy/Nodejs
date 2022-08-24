// 1. 引入fs 文件管理 模块
const fs = require("fs")
// 2.读取文件
/**
 * readFile函数
 * 参数1: 读取文件的路径地址
 * 参数2: 读取的编码格式
 * 参数3: callback
 * */
fs.readFile("../files/1.txt","utf-8",(err,fileText)=>{
    /**
     * callback
     * @err 当读取文件失败(文件路径错误等情况)是会输出错误原因，如果读取文件成功则输出Null
     * @fileText 读取文件成功时返回文件内容，失败时则返回undefined
     * */
    console.log(err)
    console.log(fileText)
})