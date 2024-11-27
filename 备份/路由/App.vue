<template>
    <!--    <person/>-->
    <div class="app">
      <Header/>
    </div>
    <!--导航区-->
    <div class="navigate">
      <RouterLink to="/home">首页</RouterLink>
      <RouterLink :to="{name:'xinwen'}">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}">关于</RouterLink>
    </div>
    <!--展示区-->
    <div class="main-content">
      <RouterView>

      </RouterView>
    </div>
</template>

<script lang="ts" setup name="App">
    import Person from '@/components/Person.vue'
    import Header from '@/components/Header.vue'
</script>

<style scoped>
/* 整体布局 */
.app {
  text-align: center;
  padding: 20px;
}

/* 导航区样式 */
.navigate {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.navigate a {
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.navigate a:hover {
  background-color: #007BFF;
  color: #fff;
}

/* 展示区样式 */
.main-content {
  border: 1px solid #ddd;
  padding: 40px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* 全局样式调整 */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}
</style>