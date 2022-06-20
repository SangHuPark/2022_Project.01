var express = require('express')
// express 모듈을 가져온 express 객체 생성
var app = express()
// 모듈은 함수라서 실행하면 application을 리턴하고 app을 통해 application 작업
// 이는 express를 만든 사람이 지정한 형식

app.get('/', function(req, res){
  res.send('Hello World!')
})
// 사용자가 홈페이지로 접속했을 때 홈페이지로 접속했다라는 화면을 보여주기 위한 메서드
// 사용자는 get, post 방식으로 접속할 수 있다.
// 그러나 사용자가 URL로 접속했다는 것은 get 방식으로 접속함을 의미
// 사용자가 home으로 접속하면 콜백 실행
// 콜백의 인자로는 사용자가 요청한 정보를 담은 req 객체를 전달
// 응답에 대한 객체를 res 객체로 전달
app.get('/login', function(req, res){
  res.send('<h1>Login please</h1>')
})
// 사용자가 login 페이지로 접속 시 'Login please' 출력
// <h1> 태그로 감싸 응답했기 때문에 html 형식으로 출력됨

// 즉 사용자가 들어온 경로에 따라 어떤 결과를 실행할 것인지 연결해주는 것이 get 메서드
// 이러한 get 메서드를 라우터라 하고 이 메서드가 하는 일을 라우팅이라 함

app.listen(3000, function(){
  console.log('Connected 3000 port!')
})
// listen 메서드를 통해 port 번호를 인자로 전달하고 listening이 성공하면 콜백을 실행
