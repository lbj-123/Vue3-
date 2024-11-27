<template>
  <div class="count">
    <h2>当前求和：{{countStore.sum}}</h2>
    <h3>{{countStore.school}},位于{{countStore.address}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
    import {ref} from "vue";
    //引入useCountStore
    import {useCountStore} from '@/store/count'
    //使用useCountStore,得到一个专门保存count相关的store
    const countStore = useCountStore()
    //以下两种方式都能拿到state中的数据
    // console.log('@@@',countStore.sum)
    //console.log('@@@',countStore.$state.sum)
    //数据
    let n =ref(1)//用户选择的数字
    //方法
    function add(){
      //第一种修改方式
      // countStore.sum+=n.value
      //第二种修改方式，批量变更
      // countStore.$patch({
      //   sum:10,
      //   school:'jdhdk',
      //   address:'安徽'
      // })
      //第三种修改方式
      countStore.increment(n.value)
    }
    function minus(){

    }
</script>

<style scoped>
.count{
  background: #007BFF;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button{
  margin: 0 5px;
  height: 25px;
}

</style>