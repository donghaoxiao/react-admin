import React,{Component}from 'react'
import './bg.jpg'
import logo from '../../assets/images/logo.png'
import './index.less'
import FormLogin from '../../components/login-form/index'
import {reqLogin} from '../../api/ajax/index'


export default class Login extends Component{
  state={
    errmsg:''
  }
  login=async(username,password)=>{
    const result=await reqLogin(username,password)

    if(result.status===0){
      //跳转到admin页面
      this.props.history.replace('/')

    }else{
       this.setState({
         errmsg:'账号名或者密码输入错误，请重新输入'
       })
    }
    console.log(result.status)
  }
  render(){
    const {errmsg}=this.state
    const height=errmsg?30:0
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h2>React项目: 后台管理系统</h2>
        </header>
        <div className="login-content">
          <div className="errorMsg" style={{height}}>{errmsg}</div>
          <h2>用户登陆</h2>
           <FormLogin login={this.login}/>
        </div>
      </div>
    )
  }
}
