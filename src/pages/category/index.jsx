import React, {Component} from 'react'
import {
  Card,
  Button,
  Icon,
  Table,
  message,
  Modal,
} from 'antd';
import {reqCategory,reqAddCategory} from '../../api/ajax'
import AddCategoryForm from '../../components/add-category-form'
export default class Category extends Component {

  //设置初始化品类信息
  state={
    data:[],
    addCategory:false
  }
getCategory=async parentId=>{
    const result=await reqCategory(parentId)
  if(result.status===0){
      this.setState({
        data:result.data,

      })
    message.success('获取数据列表成功')
  }else{
    message.error('获取列表失败')
  }
}
  componentWillMount(){
     this.getCategory('0')
  }
  addCategoryOk=async()=>{

    const {parentId,categoryName}=this.form.getFieldsValue()
    console.log(this.form.getFieldsValue())
    const result=await reqAddCategory(parentId,categoryName)
    console.log(result.data)
    if(result.status===0){
      message.success('添加数据成功')

      this.setState({
        data:[...this.state.data,result.data],
        addCategory:false
      })
    }else {
      message.error('添加数据失败')
      this.setState({
        addCategory:false
      })
    }
    this.form.resetFields()
  }
  render() {
    const columns = [{
      //设置表头名称
      title: '品类名称',  //表头名称
      dataIndex: 'name',

    }, {
      title: '操作',
      width: 300,
      render: xxx => {
        return <div>
          <a href="javascript:void(0)">修改名称</a> &nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0)">查看其子品类</a>
        </div>
      }
    }];

   const {data,addCategory}=this.state
    return (
      <Card
        title="一级分类列表"
        extra={<Button type='primary'onClick={()=>this.setState({addCategory:true})}><Icon type="plus" />添加品类</Button>}
      >
        <Modal
          title="添加分类"
          okText={'确认'}
          cancelText={'取消'}
          visible={addCategory}
          onOk={this.addCategoryOk}
          onCancel={()=>{this.setState({addCategory:false})}}
        >
         <AddCategoryForm data={data} setForm={form=>this.form=form}/>
        </Modal>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{
            pageSize: 3,
            showSizeChanger: true,

            pageSizeOptions: ['3', '6', '9', '12'],
            showQuickJumper: true
          }}
          rowKey='_id'
          loading={data.length===0}
        />
      </Card>
    )
  }
}