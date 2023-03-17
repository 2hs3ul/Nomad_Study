//#3.0 The Document Object
document.title > Momentum
document.getElementById("title")
<h1 id="title">Grab me!</h1>
// javascript에서 html로 바로 접근가능.
// javascript에서 html document객체로부터 title을 읽어올수있다.

//#3.1 HTML in Javascript
document.title = "hi" > hi
title.innerText = "got you" >  got you
javascript에서 html을 읽어올뿐만아니라 변경도 가능하다.

console.log(title.id);
console.log(title.className);

const title = document.getElementsByTagName("h1");
console.log(title);

// #3.2 Searching For Elements
const title = document.querySelector(".hello h1");
//classname이 hello라는 것을 명시해줘야함. 하나의 element를 return (첫번째 element만 가져온다)
//querySelector는 css선택자를 사용한다.
const title = document.querySelectorAll(".hello h1");
//모든 element를 return

const title = document.querySelector("#hello");
const title = document.getElementById("hello"); // 둘 다 같은 역할

console.log(title);

//#3.3 Events
const title = document.querySelector("div.hello:first-child h1");
console.dir(title);
title.style.color="blue";

click event //
click을 listen해볼거야

title.addEventListenter("click")

//#3.4 Events part Two

//#3.5 More Events

//#3.6 CSS in Javascript


//#3.7 CSS in Javascript part Two

//#3.8 CSS in Javascript part Three 