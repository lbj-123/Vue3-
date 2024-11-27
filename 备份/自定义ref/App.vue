<template>
  <Count/>
  <LoveTalk/>
  <div>
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script lang="ts" setup name="App">
  // import Count from "@/components/Count.vue";
  // import LoveTalk from "@/components/LoveTalk.vue";
  import {ref} from "vue";
  import useMsgRef from "@/hooks/useMsgRef";
  //使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
  // let msg =ref('你好')

  //使用useMsgRef来定义一个响应式数据且有延迟的效果
  let {msg} = useMsgRef('hello',2000)

</script>

<style scoped>

</style>
