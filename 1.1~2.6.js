alert("hi");

//#2.2 Variables
const a = 5; // const는 재할당이 불가능하다.(절대 바뀌지 않을 값)
const b = 2;
const myName = "choco";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

//#2.3 const and let
let c = 5;
let d = 2;
let myName2 = "nico";

console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("hello " + myName2);

myName2 = "nicolas"; // let은 const와 달리 재할당이 가능하다. (바뀔수도 있는 값)

console.log("hello " + myName2);

// 보통 const를 사용하고 때에 따라 let을 쓴다.
// var는, 원할때 아무데나 재선언이 가능하다. 값이 보호받지 못함.

//#2.4 Booleans
//true-on, false-off, null-비어있다고 정의, undefined-아예 정의가 안되있음
const amIFat = null;
let something; // undefined
console.log(something, amIFat);

//#2.5 Arrays 값을 리스트로 정리
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[4]); //thu
console.log(daysOfWeek[20]); //undefined

daysOfWeek.push("sun");
console.log(daysOfWeek);

//#2.6 Objects 객체
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name); // object.property
player.fat = false;
console.log(player);
player.lastName = "potato"; // property 추가!
player.points = player.points + 15;
console.log(player.points); //25
