<script setup lang="ts">  
 
import { useRouter } from 'vue-router'
import { onMounted,onUnmounted,ref } from 'vue'
const route = useRoute()
const url = ref("/")

const router = useRouter()
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
  ,{immediate: true,deep: true}
)

onMounted(() => {
  document.querySelector('.tool-layout').style.display = 'none'; 

  // //query
  // let qUrl = route.meta.query.url; 
  // //params
  // let pUrl = route.meta.params.url;
  // url.value = pUrl

  // let targetName = route.path;
  // console.log("参数2", qUrl, pUrl, targetName, route)    
})

onUnmounted(()=>{
  document.querySelector('.tool-layout').style.display = 'block'; 
}) 



</script>

<template>
  <div>
    <iframe id="bi_iframe" :src="url" style="width:calc(100vw - 240px);height:calc(100vh - 26px  - 26px - 42px - 10px);margin-top:10px;" frameborder="0" scrolling="auto"></iframe>
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
