import React,{Component} from 'react'
import logo from '../../assets/images/logo.png'
import './index.less'
import { Menu, Icon, } from 'antd';
import {NavLink,withRouter} from 'react-router-dom'
import menuList from '../../config/menu'
const SubMenu = Menu.SubMenu;
const Item=Menu.Item
 class LeftNev extends Component{

  componentWillMount(){
  this.menu=  this.menuListLoading(menuList)
  }
  menuListLoading=(menuList)=>{
    return menuList.map(item=>{
      if (item.children){
        const {pathname}=this.props.location

        const result=item.children.find(item=>item.key===pathname)
        if (result){
          this.openkey=item.key
        }

        return <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
          {/*{this.menuListLoading(item.children)}*/}
          {item.children.map(item=>{
            return<Item key={item.key}>
              <NavLink to={item.key}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </NavLink>
            </Item>
          })}
        </SubMenu>
      }else{
        return  <Item key={item.key}>
          <NavLink to={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </NavLink>
        </Item>
      }
    })
  }

  render(){
    const{pathname}=this.props.location
    return(
      <div className="leftNav">
        <header >
          <NavLink to="/home" className="leftHeader">
          <img src={logo} alt="logo"/>
          <h2>硅谷后台管理系统</h2>
          </NavLink>
        </header>
        <Menu  mode="inline" theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[this.openkey]}>
          {this.menu}
        </Menu>
      </div>
    )
  }
}
export default withRouter(LeftNev)