var _ = require('underscore');
var arr = [3, 6, 9, 1, 12];
// require라는 함수는 모듈을 가져온 다음 사용할 수 있는 객체로 반환
// _ 라는 변수를 통해 모듈 사용 가능
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));
