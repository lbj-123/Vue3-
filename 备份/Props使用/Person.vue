<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">
        {{p.name}}--{{p.age}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Person',
}
</script>

<script setup>
    import {defineProps} from "vue";
    import {Persons} from '/types'
    //只接受list
    defineProps(['list'])

    //接收list+限制类型
    // defineProps<{list:Persons}>()

    //接收list,并将props保存起来
    // let x =defineProps(['list'])
    // console.log(x.list)
</script>

<style scoped>
.person{
  background: cornflowerblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>