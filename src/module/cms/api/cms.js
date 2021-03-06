import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_list = (page,size,params) =>{
  let query = querystring.stringify(params)
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+'/?'+query);

}
//页面添加
export const page_add = params => {
  return http.requestPost(apiUrl+'/cms/page/add',params)
}


