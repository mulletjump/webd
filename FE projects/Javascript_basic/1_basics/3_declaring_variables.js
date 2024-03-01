/**variable 선언하기
 * 1) var - 더이상 쓰지 않지만 실습에서만 쓴다
 * 2) let
 * 3) const
*/

var name = '코드팩토리';
console.log(name);

var age = 3333332;
console.log(age);

let ive = '아이브';
console.log(ive);
/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있음
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리'
// console.log('newJeans');  const는 선언한 변수의 값을 나중에 바꿀 수 없음!

/**
 * 선언과 할당
 * 1) 선언은 변수를 선언하는 것.
 * 2) 할당은 값을 넣어주는 것.
 */

let girlFriend;
console.log(girlFriend); 
//  const는 값을 못 바꾸니까 undefined로 되지 않음