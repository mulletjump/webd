/**
 * Data Types
 * 
 * 여섯개의 primitive  Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number 숫자
 * 2) String 문자열
 * 3) Boolen 불리언
 * 4) undefined
 * 5) null
 * 6) Symbol 심볼
 * 
 * 7) Object 객체
 *  Funtion, Array, Object
 */

// 1) Number
const temperature = -10;
console.log(temperature);
console.log(typeof temperature);

// 2) String
const code = '코드 "코드코드"'
console.log(code);
console.log(typeof code);
/**
 * Escaping Character
 * 1) newline -> \n
 * 2) tap -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶으면 \\ 이렇게 두 번 쓰기
 * 4) \' \"" 이렇게 쓰면 따옴표들을 스트링으로 쓸 수 있음
*/ 

/**
 * Template Literal을 쓰면 이렇게 귀찮은 거 안 해도 됨 
 * 백틱은 왼쪽 탭 위에 있음 뭘 넣어도 글자 그대로 출력이 돼!
 */

const anYujin2 = `'아이브
안유진`;
console.log(anYujin2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`)

const 성연의_말 = '안녕하세요'
console.log(`성연이 하는 말은? ${성연의_말}라고 하네요`)
/**
 * 3) Boolean
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isFalse);

/**
 * 4) undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 직접 undefined로 값을 초기화하는 것은 지양해야 함
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * 5) null
 * 
 * js에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다.
 * */

/**
 * 6) Symbol
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * */

/**
 * Object
 * 키:벨류의 쌍으로 이루어져있다
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노랑색'
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['yellow']);

const iveMembers = [
    '안유진',
    '가을',
    '레이'
]
console.log(iveMembers);
console.log(iveMembers[1]);

/** 
 * static typing : 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시해줌
 * dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론함 JS는 dynamic!
*/

const age = 30;
const job = '개발자';

const msg = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg);



