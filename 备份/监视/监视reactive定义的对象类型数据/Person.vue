<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型数据】</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script>
export default {
  name: 'Person',
}
</script>

<script setup>
import {reactive,watch} from "vue";
//数据
let person =reactive({
  name:'张三',
  age:18
})
//方法
function changeName(){
  person.name+='~'
}
function changeAge(){
  person.age+=1
}
function changePerson(){
  Object.assign(person,{name:'Lisi',age:21})
}
/**监视，情况三：监视【reactive】定义的【对象类型】数据，且默认开启深度监视
 watch的第一个参数是：被监视的数据
 watch的第二参数是：监视的回调
 watch的第三个参数是：配置对象(deep、immediate)
 */
watch(person,(newValue,oldValue)=>{
  console.log('person变化了',newValue,oldValue)
})

</script>

<style scoped>
.person{
  background: cornflowerblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>