var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
// data.txt 파일을 저장할 때 utf8 방식으 저장을 했기 때문에 읽어올 때도 utf8 방식으로 읽어오라는 것을 명시해 준 것.
console.log(data);
// 출력 시 1이 출력되고 data 파일을 읽어 출력됨.
// 만약 readFileSync라는 것이 읽는 데 10분이 걸리는 파일이라 10분 동안 일을 처리하다가 data 파일의 결과가 출력됨.
// 이것이 동기적 방식

// Async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
  console.log(3);
  console.log(data);
})
console.log(4);
// 2가 출력이 되고 readFile에 의해서 data.txt 파일을 읽은 다음에(작업이 끝난 다음에) 익명 함수 콜백으로 정의된 함수 readFile이 내부적으로 작업이 끝났을 때 호출함.
// 에러가 있다면 err(Null)를 출력하고 성공이면 data라는 두 번째 매개변수로 출력하는데 콜백으로 console.log가 있기 때문에 data.txt를 출력한다.
// 출력(실행) 순서가 2 -> 4 -> 3
// console.log(2); 를 실행 후에 reaFile로 파일을 읽는 작업은 백그라운드에서 실행한다. (작업을 다른 영역에 던진다)
// 그 다음 바로 console.log(4); 가 실행되고
// readFile이 파일을 읽는 작업이 끝나면
// readFile에 콜백으로 전달한 익명 함수를 readFile이 실행해서 두 번째 인자의 값으로 전달되어 결과가 출력된다.

// 즉 동기 방식은 차례대로 실행하며 실행이 끝나야 다음으로 넘어가지만
// 비동기 방식은 2가 실행되고 readFile이 실행된 다음에 바로 4가 실행된다.
// 즉 readFile의 실행 결과를 기다리지 않고 바로 다음 작업으로 넘어간다는 것.

// 이를 통해 node.js 는 빠른 반응 속도를 가질 수 있다.
