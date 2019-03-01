import store from 'store'

export const setItem=value=>{
  //判断需要保存的数据不能为空或者是函数
  if(value &&typeof value !=='function'){
    //如果值不为空调用store的set方法设置要保存的数据的名字以及数据
    store.set('user',value)
  }else {
    console.log('保存失败:保存数据为空或者是字符串')
  }
}

export const getItem=()=>{

  const value=store.get('user')
  console.log(value)
  return value || '';
}
export const removeItem=()=>{

  store.remove('user')
}