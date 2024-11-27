<template>
   <div class="news">
     <!--导航区-->
     <ul class="news-list">
       <li v-for="news in newsList" :key="news.id">
         <button @click="showNewsDetail(news)">查看新闻</button>
          <!--第二种写法-->
              <RouterLink
                  :to="{
                     name:'xijie',//只能用name,不能用path
                     params:{
                       id:news.id,
                       title:news.title,
                       content:news.content,
                     }
                  }"
              >
                {{news.title}}
              </RouterLink>
       </li>
     </ul>
     <!--展示区-->
     <div class="news-content">
          <RouterView></RouterView>
     </div>
   </div>
</template>

<script lang="ts" setup="News">
   import {reactive} from "vue";
   import {useRouter} from "vue-router";

   const newsList = reactive([
     {id:'dsddad001',title:'很好的抗癌食物',content:'西兰花'},
     {id:'dsddad002',title:'如何一夜暴富',content:'买彩票'},
     {id:'dsddad003',title:'不想上课',content:'逃课'},
     {id:'dsddad004',title:'好消息!好消息!',content:'中五百万'},
   ])
   /**编程式导航
    * <RouterLink>里to怎么写，编程式导航的路径就怎么写
    */
   const router =useRouter()
   function showNewsDetail(news){
       router.push({
         name:'xijie',//只能用name,不能用path
         params: {
           id: news.id,
           title: news.title,
           content: news.content,
         }
       })
   }
</script>

<style scoped>
    .news {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      padding: 20px;
    }

    .news-list {
      /*list-style: none;*/
      padding: 0;
      margin: 0;
      width: 200px;
    }

    .news-list li {
      margin-bottom: 10px;
    }

    .news-list a {
      text-decoration: none;
      color: #007BFF;
      font-weight: bold;
      transition: color 0.3s;
    }

    .news-list a:hover {
      color: #0056b3;
    }

    .news-content {
      flex-grow: 1;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
</style>