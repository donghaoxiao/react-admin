import React,{Component}from 'react'
import {Row,Col} from 'antd'
import './index.less'
import {Switch,Route} from 'react-router-dom'
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
export default class Admin extends Component{
  render(){
    return (
      <Row className="admin">
        <Col span={4} className="">
        <LeftNev/>
        </Col>
        <Col span={20}>
        <Header/>
          <div className="right-contnet">
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/user' component={User}/>
              <Route path='/role' component={Role}/>
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
            </Switch>
          </div>
        <Bottom/>
        </Col>
      </Row>
    )
  }
}