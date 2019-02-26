import React,{Component}from 'react'
import './bg.jpg'
import logo from './logo.png'
import './index.less'
import {
  Form, Icon, Input, Button,
} from 'antd';
const {Item}=Form
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
          <Form className="login-form">
            <Item>
              <Input prefix={<Icon type="user" />} placeholder="用户名" />
            </Item>
          <Item>
            <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
          </Item>
            <Item>
              <Button type="primary" className="login-form-button">登录</Button>
            </Item>

          </Form>
        </div>
      </div>
    )
  }
}
