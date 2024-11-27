<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本数据类型】</h1>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script>
export default {
  name: 'Person',
}
</script>

<script setup>
import {ref,watch} from "vue";
//数据
let sum = ref(0)
//方法
function changeSum(){
  sum.value+=1
}
//监视，情况一：监视【ref】定义的【基本数据类型】
const stopWatch = watch(sum,(newValue,oldValue)=>{
  console.log('sum变化了',newValue,oldValue)
  if (newValue>=10){
    stopWatch()
  }
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