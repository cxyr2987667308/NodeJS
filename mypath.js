const path = require('path');

// 拼接路径
const a = path.join('www', 'err', '404.html')
console.log('a', a);

// __dirname: 当前文件夹  __filename: 当前文件路径
console.log(__dirname);
console.log(__filename);