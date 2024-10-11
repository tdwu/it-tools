<script setup lang="ts">  
import { onMounted,onUnmounted,ref } from 'vue'
import { useStyleStore } from '@/stores/style.store';
import { useRouter } from 'vue-router'

const styleStore = useStyleStore();
const router = useRouter()
const url = ref("/")
const width1 = ref("calc(100vw - 240px - 26px - 26px)")
const width2 = ref("calc(100vw  - 26px - 26px)")
const height1 = ref("calc(100vh - 26px  - 26px - 42px - 10px)")

watch(() => router.currentRoute.value.path,
  (toPath) => {
    const currentRoute = router.currentRoute.value
    //要执行的方法
    //query
    let qUrl = currentRoute.meta.query.url; 
    //params
    let pUrl = currentRoute.meta.params.url;
    url.value = pUrl

    let targetName = currentRoute.path;
    console.log("参数1", qUrl, pUrl, targetName, currentRoute)    
  }
  ,{ immediate: true, deep: true }
)

onMounted(() => {
  let toolLayout = document.querySelector('.tool-layout')
  toolLayout && (toolLayout.style.display = 'none'); 

  // const route = useRoute()

  // //query
  // let qUrl = route.meta.query.url; 
  // //params
  // let pUrl = route.meta.params.url;
  // url.value = pUrl

  // let targetName = route.path;
  // console.log("参数2", qUrl, pUrl, targetName, route)   

})

onUnmounted(()=>{
  let toolLayout = document.querySelector('.tool-layout')
  toolLayout && (toolLayout.style.display = 'block');   
}) 



</script>

<template>
  <div>
    <iframe id="bi_iframe" :src="url" 
    :style="{width:!styleStore.isMenuCollapsed?width1:width2, height:height1}"
    style="margin-top:10px; padding:2px; border: 1px solid #2e2e2e;" 
    frameborder="0"
    scrolling="auto"></iframe>
  </div>
</template>

<style lang="less" scoped>
iframe::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

iframe::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, .5);
    background-clip: padding-box;
    min-height: 28px;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
    transition: background-color .3s;
    cursor: pointer;
}

iframe::-webkit-scrollbar-thumb:hover {
    background-color: rgba(144, 147, 153, .3);
}
</style>
