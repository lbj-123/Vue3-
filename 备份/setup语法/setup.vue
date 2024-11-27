<template>
  <div class="person">
    <h2>姓名:{{name}}</h2>
    <h2>姓名:{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script>
export default {
  name: "setup",
  setup(){
    // console.log(this)//setup函数中的this是Undefined，Vue3中弱化了this
    //数据,原来是写在data中的，此时的name,age,tel都不是响应式的数据
    let name = '张三'
    let age = 18
    let tel = '13422333988'
    //方法
    function changeName(){
      name = 'zhang-san'
      console.log(name)
    }
    function changeAge(){
       age += 1
       console.log(age)
    }
    function showTel(){
       alert(tel)
    }
    //将数据、方法交出去，模板中才可以使用
    return{name,age,changeName,changeAge,showTel}
    //setup的返回值也可以是一个渲染函数
    // return ()=> '哈哈'
  }
}
</script>

<style scoped>
  .person{
    background: cornflowerblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 5px;
  }
</style>