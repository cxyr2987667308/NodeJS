const fs = require('fs');
// 1 写
// 1.1 同步
// const res = fs.writeFileSync('./www/w1.txt', '第一个文件', 'utf8');
// console.log('res', res);

// 1.2 异步
// console.log(1);
// fs.writeFile('./www/t1.txt', '第一个异步创建文件', 'utf8', err => {
//   if(err){
//     console.log('写入失败');
//     throw err;
//   }
//   console.log('写入成功');
// });
// console.log(2);

// 2 读
// 2.1 同步
// const data = fs.readFileSync('./www/w1.txt', 'utf8');
// console.log('data', data);

// 2.2 异步
// console.log(1);
// fs.readFile('./www/t1.txt', 'utf8', (err, data) => {
//   if(err){
//     console.log('读出错了');
//     throw err
//   }
//   console.log('data', data); // 有传utf8就不需要转成字符串 data.toString()

// });
// console.log(2);

// 3 文件是否存在
// 3.1 同步
// const res = fs.existsSync('./www/w1.txt');
// console.log('res', res);

// 3.2 异步
// fs.exists('./www/t1.txt', res => {
//   console.log(res);
// })

// 4 内容追加
// 4.1 同步
// const res = fs.appendFileSync('./www/log.txt', '\n 这是日志文件' + new Date(), 'utf8');
// console.log('res', res);

// 4.2 异步
// fs.appendFile('./www/log.txt', '\n 这是日志文件' + new Date(), 'utf8', err => {
//   console.log(err);
//   if(err){
//     console.log('添加失败');
//     throw err;
//   }
//   console.log('添加成功');
// })

// 5 文件监听
// fs.watchFile('./www/t1.txt', (a, b) => {
//   console.log(a);
//   console.log('a=' + a);
//   console.log('b=' + b);
// })