import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";

/**export const useTalkStore = defineStore('talk',{
    //actions里面放置的是一个一个的方法，用于响应组件的'动作'
    actions:{
        async getATalk(){
            //发请求，下面这行写法是：连续解构赋值+重命名
            let {data:{content:title}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            //把请求回来的字符串，包装成一个对象
            let obj ={id:nanoid(),title}
            //放到数组中
            this.talkList.unshift(obj)
        }
    },
    //真正存储数据的地方
    state(){
        return{
           talkList:JSON.parse(localStorage.getItem('talkList') as string) ||[]
        }
    }
})*/
/**
 * 以下是组合式写法，以上是选项式写法
 */
import {reactive} from "vue";
export const useTalkStore = defineStore('talk',()=> {
    //talkList就是state
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )

    //getATalk函数相当于action
    async function getATalk() {
        //发请求，下面这行写法是：连续解构赋值+重命名
        let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串，包装成一个对象
        let obj = {id: nanoid(), title}
        //放到数组中
        talkList.unshift(obj)
    }
    return{talkList,getATalk}
})