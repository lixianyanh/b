// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.userInfo.openId)
  return "123";  
}
//test code 
let result = expoets.main({
  userInfo:{
    openId:"abcd"
  }
},{})
console.log(result)