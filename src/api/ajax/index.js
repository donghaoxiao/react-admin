/**
 * Created by Administrator on 2019/2/27.
 */
import ajax from './ajax'
const prefix='http://localhost:3000'
export const reqLogin=(username,password)=>ajax(prefix+'/login',{username,password},'POST')
export const reqaddlogin=(user)=>ajax(prefix+'/manage/user/add',user,'POST');
