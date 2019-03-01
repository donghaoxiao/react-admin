import React, {Component} from 'react'
import {Row,Col,Modal,message} from 'antd'
import {withRouter} from 'react-router-dom'
import dayJs from 'dayjs'
import './index.less'
import MemoryUtils from '../../utils/memoryUtils'
import {removeItem} from '../../utils/storageUtils'
import {reqWeather}from '../../api/ajax/index'
import menuList from '../../config/menu'
const confirm = Modal.confirm;
 class Header extends Component {
   state={
     nowTime:dayJs().format('YYYY-MM-DD  HH:mm:ss'),
     dayPictureUrl:'',
     weather: ''
 }
   getWeather=()=>{
     reqWeather('北京')
       .then(res=>{
         this.setState({
           dayPictureUrl:res.dayPictureUrl,
           weather:res.weather
         })
       })
       .catch(err=>{
         message.error(err)
       })
   }
 componentWillMount(){
     this.timer=setInterval(()=>{
       this.setState({
         nowTime:dayJs().format('YYYY-MM-DD  HH:mm:ss')
       })
     },1000)
   this.getWeather()
 }

 componentWillUnmount(){
   clearInterval(this.timer)
 }
  logOut=()=>{
    confirm({
      title: '你确定要退出登录吗？',
      cancelText: '取消',
      okText: '确认',
      onOk:()=>{
        //清空内存信息
        //清空磁盘信息
        MemoryUtils.user={};
        removeItem();
        this.props.history.replace('/login')
      }
    });
  }
  getName=menu=>{
   const {pathname}=this.props.location
    for (let i = 0; i < menu.length; i++) {
      let item=menu[i]
      if (item.children){
         const title=this.getName(item.children)
        if(title){
           return title
        }
      }else {
        if(item.key==pathname){
          return item.title
        }
      }
    }


  }

  render() {
   const {nowTime,dayPictureUrl,weather}=this.state
    const {username}=MemoryUtils.user
    const title=this.getName(menuList)
    return(
      <div className='header'>
        <Row className='header-top'>
          <span>欢迎, {username}</span>
          <a href="javascript:void(0);" onClick={this.logOut}>退出</a>
        </Row>
        <Row className='header-bottom'>
          <Col span={6} className='header-bottom-left'>{title}</Col>
          <Col span={18} className='header-bottom-right'>
            <span>{nowTime}</span>
            <img src={dayPictureUrl} alt="天气"/>
            <span>{weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(Header)