<script setup lang="ts">  
 
import { onMounted,onUnmounted } from 'vue'

onMounted(() => {
  document.querySelector('.tool-layout').style.display = 'none';
})

onUnmounted(()=>{
  document.querySelector('.tool-layout').style.display = 'block'; 
}) 


//首先在setup中定义
const route = useRoute()
//query
let qUrl = route.meta.query.url; 
//params
let pUrl = route.meta.params.url;

let targetName = route.path;
console.log("参数", qUrl, pUrl, targetName, route)    

</script>

<template>
  <div>
    <iframe id="bi_iframe" :src="pUrl" style="width:calc(100vw - 240px);height:calc(100vh - 26px  - 26px - 42px - 10px);margin-top:10px;" frameborder="0" scrolling="auto"></iframe>
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
