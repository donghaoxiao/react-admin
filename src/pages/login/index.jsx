import React,{Component}from 'react'
import './bg.jpg'
import logo from './logo.png'
import './index.less'
import FormLogin from '../../components/login-form/index'

export default class Login extends Component{
  render(){
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h2>React项目: 后台管理系统</h2>
        </header>
        <div className="login-content">
          <h2>用户登陆</h2>
           <FormLogin/>
        </div>
      </div>
    )
  }
}
