import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Select,
  Form,
  Input
} from 'antd'
const Item=Form.Item
const Option = Select.Option;

 class AddCategoryForm extends Component {
static propTypes={
  data:PropTypes.array.isRequired,
  setForm:PropTypes.func.isRequired
}
componentWillMount(){
  this.props.setForm(this.props.form)
}
  render() {
    const {data}=this.props
    const {getFieldDecorator}=this.props.form
    console.log(this.props.form)

    return(
      <Form>
        <Item label="所属分类">

          {
            getFieldDecorator(
              'parentID',
              {initialValue:'0'}
            )(
              <Select>
                <Option key='0' value='0'>一级分类</Option>
                {data.map((item)=> <Option key={item._id} value={item._id}>{item.name}</Option>)}
              </Select>
            )
          }


        </Item>
        <Item label="分类名称">
          {
            getFieldDecorator(
             'categoryName',{}
            )(<Input placeholder="请输入分类名称"/>)
          }
        </Item>
      </Form>
    )
  }
}
export default Form.create()(AddCategoryForm)