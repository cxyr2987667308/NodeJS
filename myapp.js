const http = require('http');
const fs = require('fs');
const path = require('path');

// req: 客户端请求的变量   res： 响应的变量
// 创建服务
const myServer = http.createServer((req, res) => {
  const myUrl = req.url === '/' ? 'index.html' : req.url;
  const myPath = path.join('view', myUrl);
  console.log('myPath', myPath);

  if(fs.existsSync(myPath)){
    const html = fs.readFileSync(myPath);
    res.write(html);
  } else {
    const myErrPath = path.join('view', 'err', '404.html');
    console.log('myErrPath', myErrPath);
    const errHtml = fs.readFileSync(myErrPath);
    res.write(errHtml);
  }
  res.end();
})

myServer.listen('5050', (err) => {
  if(err){
    console.log(err);
    throw err;
  }
  console.log('服务器已开启，端口号：5050');
})