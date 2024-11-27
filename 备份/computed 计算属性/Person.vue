<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{fullName}}</span>
    <button @click="changeFullName">将全名改为li-si</button>
  </div>
</template>

<script>
export default {
  name: 'Person',
}
</script>

<script setup>
    import {computed, ref} from 'vue'

    let firstName = ref('zhang')
    let lastName =ref('san')
    //这么定义的fullName是一个计算属性，且是只读的
    // let fullName=computed(()=>{
    //   return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
    // })


    //这么定义的fullName是一个计算属性，可写可读的
    let fullName=computed({
      get(){
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
      },
      set(val){
        const [str1,str2]=val.split('-')
        firstName.value=str1
        lastName.value=str2
      }
    })

    function changeFullName(){
      fullName.value='li-si'
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