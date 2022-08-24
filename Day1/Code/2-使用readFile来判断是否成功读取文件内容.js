const fs = require("fs")
fs.readFile("../files/11.txt","utf-8",(err,fileText)=>{
//    据我们所知，参数err在文件读取成功时返回的是null，所以我们判断err是否为true，如果为true就代表读取失败，不为true则相反
    if(err){
        return console.log(`读取文件失败，错误为：${err.message}`)
    }
    console.log(`读取文件成功，文件内容为：${fileText}`)
})