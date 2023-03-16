//#2.7 Functions part One, #2.8 Functions part Two
//Function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해준다.
//argument는 Function이 실행되는 동안 어떤 정보를 function에게 보낼 수 있는 방법
function sayHello() {
  console.log("hello!");
}
sayHello(); //hello!
sayHello();
sayHello();

function sayHello() {
  console.log("hello! my name is C");
}

sayHello("nico"); //hello! my name is C

function sayHello(nameOfPerson) {
  console.log("nameOfPerson");
}

sayHello("nico");
sayHello("dal");
sayHello("lynn");

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 31);

function plus(a, b) {
  console.log(a + b);
}
plus(); // NaN = Not a Number 숫자가 아님
plus(8, 60);

function divide(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}

divide(50, 10);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello!" + otherPersonsName) + "nice to meet you";
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

//#2.9 Recap
// 데이터 타입에 대한 복습
// 변수 Variable  : const let var
// 참 거짓 boolean true false
// 비어있음 정의되어있지않음 null undefined
// 배열 list array days = []; 배열요소불러오기와 push

//#2.10 Recap II
object객체 - property;
object.property = console.log();
const player2 = {
  name: "nico",
  age: 98,
};
console.log(player2);
player.name = "nicolas";
console.log(player2);
player.sexy = "soon"; // property추가 - 배열은 push
console.log(player2);

//과제 : 계산기 만들기
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  sub: function (a, b) {
    console.log(a - b);
  },
  mul: function (a, b) {
    console.log(a * b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  squ: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 10);
calculator.sub(5, 10);
calculator.mul(5, 10);
calculator.div(5, 10);
calculator.squ(5, 10);

//#2.11 Returns
// console.log는 데이터를 출력'만'한다.
// return은 데이터를 얻어서 무언가 하는 것.
const age = 96;
function calculatorKrAge(ageofForeigner) {
  return ageofForeigner + 2;
}

const krAge = calculatorKrAge(age); // function의 값 자체가 98이 된다.

console.log(krAge);

const age = 96;
function calculatorKrAge(ageofForeigner) {
  ageofForeigner + 2;
  return "hello";
}

const krAge = calculatorKrAge(age); // function의 값 자체가 helor 된다.

console.log(krAge);

//#2.12 Recap
//return에 대한 복습-console.log와 다른 점
const calculator = {
  add: function (a, b) {
    return a + b; //return하는 순간 function이 종료된다.
    console.log("hello!"); // 출력안됨
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  squ: function (a, b) {
    return a ** b;
  },
};
const plusResult = calculator.plus(2, 3);

//#2.13 Conditionals
const age = prompt("how old are you?");
console.log(age);
console.log(typeof age);

parseInt("15"); // String을 Number로
parseInt("lalalala"); // 처리 불가
console.log(typeof 15, typeof parseInt("15"));

//#2.14 Conditionals part Two
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  ///condition == true
  console.log("please write a number");
} else {
  ///condition == false
  console.log("Thank you for writing your age" + age);
}
//#2.15 Conditionals part Three
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  // 둘중 하나만 충족
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
  // 둘다 충족
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}

//#2.16 Recap 자바스크립트는 사용자와 상호작용하기 위해 만들어졌다.
//            이후에 자바스크립트가 HTML과 상호작용하는 모습을 보자
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age === 100) {
  console.log("wow you are wise"); // 적는 순서 중요!! 조건충족하면 거기서 조건문 끝.
} else if (age !== 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}
