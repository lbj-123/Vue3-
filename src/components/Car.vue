<template>
    <div class="Car">
      <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
      <button @click="changePrice">修改汽车的价格</button>
      <button @click="changeCar">修改汽车</button>
      <br>
      <h2>当前求和为{{sum}}</h2>
      <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script>
export default {
  name: "Car"
}
</script>
<script setup>
   import {ref,reactive} from "vue";
   //数据
   let car = reactive({brand:'奔驰',price:100})
   let sum =ref(0)
   //方法
   function changePrice(){
     car.price += 10
   }
   function changeSum(){
     //ref创建变量必须使用.value
     sum.value+=1
   }
   function changeCar(){
     /**
      * reactive重新分配一个新对象，会失去响应式(可以使用Object.assign去整体替换)
      */
     // car = {brand:'奥迪',price:50}//这么写页面不更新的
     // car = reactive({brand:'奥迪',price:50})//这么写页面也不更新的
     //下面这个写法可以更新
     Object.assign(car,{brand:'奥迪',price:50})
   }
</script>

<style scoped>
  .Car{
    background: cornflowerblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 5px;
  }
</style>