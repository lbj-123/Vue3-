<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Person',
}
</script>

<script setup>
    import {reactive,toRefs} from 'vue'
    //数据
    let person = reactive({
      name :'张三',
      age : 18
    })
    /**
     * toRefs就是把对象类型的响应式数据提取出来，然后该属性依然是响应式数据
     * 只是变为ref响应式数据，原来的响应形式是reactive
     */
    let {name,age}=toRefs(person)

    //方法
    function changeName(){
      name.value+='~'
    }

    function changeAge(){
      age.value+=1
    }
</script>

<style scoped>
    .person{
      background: cornflowerblue;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
    }
</style>