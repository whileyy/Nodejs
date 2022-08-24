const fs = require("fs")
/**
 * writeFile函数
 * writeFile函数，用于往某个文件中写入内容，如果目标文件不存在会自动创建文件并写入内容，writeFile是全量写入，并不是追加
 * 参数1：写入文件的地址
 * 参数2：写入文件的内容
 * 参数3：写入内容的编码格式 默认 utf8
 * 参数4：回调函数
 * */
let fileAddress = "../files/2.txt"
let fileValue = "这是一段内容"
fs.writeFile(fileAddress,fileValue,"utf-8",(err)=>{
    /*
    * callback
    * err 返回null表示写入成功
    * */
    if(err){
        return console.log(`读取文件失败,异常:${err.message}`)
    }
    console.log(`文件写入成功`)
})