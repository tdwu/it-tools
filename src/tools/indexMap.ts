// src/tools/index.ts 

function kebabToCamelCase(kebabText) {
  return kebabText
      // 将字符串按 '-' 拆分为数组
      .split('-')
      // 对每个单词进行处理
      .map((word, index) => {
          // 将首字母大写，剩余字母小写，首个单词保持小写
          if (index === 0) {
              return word.toLowerCase();
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      // 连接成一个字符串
      .join('');
}


export const loadAllTools = async () => {
  const modules = import.meta.glob('./*/index.ts');
  
  // 使用 Promise.all 等待所有模块加载
  const toolModules = await Promise.all(
    Object.values(modules).map(mod => mod())
  );

  let toolsMap = {};
  let names = [];

  toolModules.forEach((module, index) => {
    const path = Object.keys(modules)[index]; // 获取对应路径 
    // 提取工具名，假设路径格式为 './tool-name/index.ts'
    const toolName = path.split('/')[1]; // 提取 'tool-name'
    //console.log(toolName,module['tool']);
    const cName=kebabToCamelCase(toolName);
    toolsMap[cName]=module['tool'];
    names.push(cName)
    // for (const key in module) {
    //   toolsMap.(toolName, module[key]);
    // }
  }); 
  console.log("loadAllTools",JSON.stringify(names))
 // console.log(JSON.stringify(toolsMap))
  return toolsMap;
};