//server에는 (1)요청을 받는 부분과  (2)응답을 보내는 부분이 있어야한다!

//http서버가 있어야  웹브라우저 요청을 처리할 수 있으므로 http 모듈을 사용했다
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1> HELLO NODE!</h1>");
    res.end("<p>Hello Server</p>");
  })

  .listen(5050, () => {
    console.log("8080번 포트에서 대기중입니다");
  });
