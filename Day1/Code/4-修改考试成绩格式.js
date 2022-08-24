// 1. 引入fs模块
const fs = require("fs")
// 2.读取考试成绩
let examResultsFileAddres = "../files/examResults.txt"
fs.readFile(examResultsFileAddres,"utf-8",(err,fileText)=>{
    /* err读取成功的情况下是返回null的 */
    if(err){
        return console.log(`文件操作终止，读取异常 ERROR->>>>>>>>>>${err.message}`)
    }
    /* 读取内容： 读取内容： 李雷=99 宇将军=999 曹操=12 dj刀山火海=0 */
    console.log(`文件操作成功，读取正常`)
    /* 处理读取到的数据 */
    let writeText = fileText.split("=").join(":")
    fs.writeFile(examResultsFileAddres,writeText,"utf-8",err=>{
        if(err){
            return console.log(`文件操作终止，写入异常 ERROR->>>>>>>>>>${err.message}`)
        }
        /* 写入内容： 读取内容： 李雷:99 宇将军:999 曹操:12 dj刀山火海:0 */
        console.log(`文件操作成功，写入正常`)
    })
})