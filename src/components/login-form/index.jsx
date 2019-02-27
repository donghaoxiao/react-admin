import React,{Component} from 'react'
import {
  Form, Icon, Input, Button,message
} from 'antd';


import PropTypes from 'prop-types'
const {Item}=Form

 class FormLogin extends Component{
   static propTypes={
     login:PropTypes.func.isRequired
   }
   changePassword=(rule,value,callback)=>{
    if(!value){
      callback('用户密码不能为空')
    }else if(value.length<4){
      callback('密码长度最小为4位')
    }else if (value.length>16){
      callback('密码长度最大为16位')
    }else if (!/^[a-zA-Z0-9_]+$/.test((value))){
      callback('用户名不能有特殊字符，只能为大小写字母数字和下划线')
    }else {
      callback()
    }
   }

   handleSubmit=(e)=>{
     e.preventDefault()
     const {validateFields,resetFields}=this.props.form
     validateFields((error,values)=>{
       if(!error){
         const {username,password}=values
          this.props.login(username,password)
       }else {
         resetFields(['password']);
       const err= Object.values(error).reduce((prev,curr)=> prev+curr.errors[0].message,'');
         message.error(err)
       }
     })



 }
  render(){
    const {getFieldDecorator}=this.props.form

    return(
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Item>
          {getFieldDecorator(
            'username',{
              rules:[
                {required:true,message:'请输入用户名'},
                {max:16,message:'用户名的最大长度为16位'},
                {min:4,message:'用户名的最小长度为4位'},
                {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名不能有特殊字符，只能为大小写字母数字和下划线'}
                ]
            }
          )(<Input prefix={<Icon type="user" />} placeholder="用户名" />)}
        </Item>
        <Item>
          {getFieldDecorator(
            'password',{
              rules:[{validator:this.changePassword}]
            }
          )
          ( <Input prefix={<Icon type="lock" />} type="password"  placeholder="密码" />)}
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        </Item>
      </Form>
    )
  }
}

const   WrappedNormalLoginForm=Form.create()(FormLogin)

export default WrappedNormalLoginForm