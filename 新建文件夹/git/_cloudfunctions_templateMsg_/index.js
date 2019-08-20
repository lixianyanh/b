// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require ('got')
let appid = 'wx7822ca5a4b8be2b9'
let secret ='cfa444ce747e73d3338c8d9b6cc45998'
let token_url = 'GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appid+'&secret='+secret;
let touser = 'oe6-Q4m3O-zIv_n3477DkVV_b9q4'
let template_id ='whvcz0UiKbNas0TeC8igzRVgfvAn3TbZxiqXJDgHutI'
let formId = 'cd1920a901034ee8a2745037e648a497'
let msg_url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN'
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let tokenResponse =  await got(token_url);
  let token =JSON.parse(tokenResponse.body).access_token;
  let msgResponse = await got(msg_url)+token,{
    method:'POST',
    headers:{
      'Content-Type':'appliction/json'
    },
    body:JSON.stringify({
      touser:touser,
      template_id:template_id,
      form_id:form_id,
      emphsis_keyword:"keyword.DATA",
      data:{
        keyword1:{
          value:"123456"
        },
        keyword2:{
          value:"腾讯云学院"
        }
      }


  }
 }  