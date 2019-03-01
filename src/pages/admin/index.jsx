import React,{Component}from 'react'
import {Layout} from 'antd'

import {Switch,Route,Redirect} from 'react-router-dom'
import {getItem} from '../../utils/storageUtils'
import LeftNev from '../../components/left-nev'
import Header from '../../components/right-header'
import Bottom from '../../components/right-bottom'
import Home from '../home'
import Category from '../category'
import Product from '../product'
import User from '../user'
import Bar from '../charts/bar'
import Role from '../role'
import Line from '../charts/line'
import Pie from '../charts/pie'
import MemoryUtils from '../../utils/memoryUtils'
import './index.less'
const {
   Content,  Sider,
} = Layout
export default class Admin extends Component{
  render(){
    //验证用户是否登录 没有登陆的话自动跳转到login页面

    const user=MemoryUtils.user
    console.log(getItem())
    if(!user ||!user._id){

      return <Redirect to="/login"/>
    }
      
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider >
        <LeftNev/>
        </Sider>
        <Layout>
        <Header/>
          <Content style={{margin: 18}} className='right-content'>
            <Switch >
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/user' component={User}/>
              <Route path='/role' component={Role}/>
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
              <Redirect to="/home"/>
            </Switch>
          </Content>
        <Bottom/>
        </Layout>
      </Layout>
    )
  }
}