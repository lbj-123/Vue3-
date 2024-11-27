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
  name: 'Person',
}
</script>
<script setup>
    import {ref} from 'vue'
    //数据,原来是写在data中的，此时的name,age,tel都不是响应式的数据
    let name = ref('张三')
    let age = ref(18)
    let tel = '13422333988'
    //方法
    function changeName(){
      name.value = 'zhang-san'
      console.log(name.value)
    }
    function changeAge(){
      age.value += 1
      console.log(age.value)
    }
    function showTel(){
      alert(tel)
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