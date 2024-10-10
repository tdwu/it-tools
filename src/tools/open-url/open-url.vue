<script setup lang="ts">

//首先在setup中定义
const route = useRoute()
//query
let qUrl = route.meta.query.url; 
//params
let pUrl = route.meta.params.url;

let targetName = route.path;
console.log("参数", qUrl, pUrl, targetName, route)  

window.open(pUrl, targetName);

</script>

<template>
  <div>
    已经跳转到:<a :href='pUrl' :target="targetName" style="color:green;padding:10px;">手动点击重新打开</a>
  </div>
</template>
<style lang="less" scoped>

 
</style>
