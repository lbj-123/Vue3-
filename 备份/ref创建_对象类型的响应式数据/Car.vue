<template>
  <div class="Car">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeFirstName">修改第一个游戏的名字</button>
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
    let car = ref({brand:'奔驰',price:100})
    let games = ref([
      {id:'01',name:'王者荣耀'},
      {id:'02',name:'刺激战场'},
      {id:'03',name:'金铲铲'}
    ])
    let name = reactive({x:999})
    console.log(car)
    console.log(name)
    //方法
    function changePrice(){
      car.value.price += 10
    }
    function changeFirstName(){
      games.value[0].name="超级玛丽"
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
    li{
      font-size: 20px;
    }
</style>