/**
 * Created by Administrator on 2019/2/27.
 */
import ajax from './ajax'
import jsonp from 'jsonp'
const prefix='http://localhost:3001'
//请求登录信息
export const reqLogin=(username,password)=>ajax(prefix+'/login',{username,password},'POST')
//请求注册信息
export const reqaddlogin=(user)=>ajax(prefix+'/manage/user/add',user,'POST');
//请求天气信息
export const reqWeather=city=>{
  return new Promise((resolve,reject)=>{
    jsonp(
      `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
      {},
      (err,data)=>{
       if(!err){
         resolve(data.results[0].weather_data[0])
       }else {
         console.log(err)
         reject('天气请求失败~');
       }
      }
    )
  })
}
//请求服务器的品类信息

export const reqCategory=parentId=>ajax(prefix+'/manage/category/list',{parentId},'GET')

//请求添加分类

export const reqAddCategory=(parentId,categoryName)=>ajax(prefix+'/manage/category/add',{parentId,categoryName},'POST')