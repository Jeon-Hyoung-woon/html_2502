var d = document;

// //유저 이메일 데이터 받기
// var userEmail = prompt("이메일 주소는?", "");
// //indexOf 사용을 위해 일반적인 메일 주소 형식 array
// var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

// //check1,2 최초 값은 false로 변수선언
// var check1 = false;
// var check2 = false;

// //유저의 이메일에 @가 1개 이상이면 check1에 true값 저장
// if (userEmail.indexOf("@") > 0) {
//   check1 = true;
// }

// //유저의 이메일과 arrUrl의 값이 동일한게 있으면 check2에 ture값 저장
// for (var i = 0; i < arrUrl.length; i++) {
//   if (userEmail.indexOf(arrUrl[i]) > 0) {
//     check2 = true;
//   }
// }

// //check1과 2가 모두 true값이면 유저 이메일 출력, 아니면 형식오류 알림창
// if (check1 && check2) {
//   d.getElementById("result1").innerHTML = `${userEmail}`;
// } else {
//   alert("이메일 형식이 잘못되었습니다.");
// }

// //section2
// const contry = ["영어", "중국어"];
// const subjects = ["쓰기", "말하기"];
// const myMap = new Map();

// for (let i = 0; i < contry.length; i++) {
//   myMap.set(contry[i], []);
//   for (let k = 0; k < subjects.length; k++) {
//     myMap.get(contry[i]).push(prompt(`${contry[i]}의 ${subjects[k]} 점수는?`));
//   }
// }

// d.getElementById("result2").innerHTML = `영어 쓰기, 말하기 점수 : ${myMap.get(
//   "영어"
// )}<br>`;
// d.getElementById(
//   "result2"
// ).innerHTML += `중국어 쓰기, 말하기 점수 : ${myMap.get("중국어")}`;

// //section3
// const users = {
//   userA: [50, 60, 100],
//   userB: [80, 90, 70],
//   userC: [75, 80, 90],
// };

// //const {값~} = users;는 map 안의 값을 개별로 꺼내기 위해 사용함.
// //해당 코드를 사용하지 않으면 단일로 값이 나타나지 않고 users.userA로 접근해야 확인됨.
// const { userA, userB } = users;
// const arr = [...userA, ...userB];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// d.getElementById(
//   "result3"
// ).innerHTML = `userA와 userB의 합계 점수 : ${sum}점`;

// //section4
// const arr1 = [10, 20, 30];
// const arr2 = arr1.map((item) => (item / 10));
// d.getElementById("result4").innerHTML = `${arr2}<br>`;

// const arr3 = ["홍길동", "김갑중", "박상무"];
// const arr4 = arr3.map((item, idx) => {
//     let obj = {};
//     obj["no"] = idx + 1;
//     obj["userName"] = item;
//     return obj;
// });

// d.getElementById("result4").innerHTML += `${arr4}`;

// //section5 some은 하나라도 만족하면 ture, 모두 만족하지 않으면 false
// const subjects = ["쓰기", "듣기", "말하기"];
// const arr5 = subjects.map((item) => {
//   return prompt(`영어 ${item}의 점수는?`, "0");
// });

// let result = arr5.some((item) => item < 60);

// result = result ? "불합격" : "합격";
// d.getElementById("result5").innerHTML = `${result}`;

// //section6 every는 모든조건 만족 시 true, 하나라도 만족하지 않으면 false
// const subjects2 = ["쓰기", "듣기", "말하기"];
// const arr6 = subjects2.map ((item) => {
//     return prompt(`${item}의 점수는?`, "0");
// })

// let result1 = arr6.every((item) => (item >= 60));

// result1 = result1 ? "합격" : "불합격";
// d.getElementById("result6").innerHTML = `${result1}`;

// //section7
// const fruit_1 = ["딸기", "바나나", "파인애플"];
// const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
// let fruit_3 = [];

// fruit_3 = [...fruit_1];
// fruit_2.map((item) => {
//   if (!fruit_3.includes(item)) {
//     fruit_3.push(item);
//   }
// });

// d.getElementById("result7").innerHTML = `${fruit_3}`;

// //sections8
// const subjects3 = ["쓰기", "듣기", "말하기"];
// const arr7 = [];
// for (let item of subjects3) {
//   arr7.push(prompt(`${item}의 점수는?`, "0"));
// }

// let result8 = arr7.every((item) => item >= 60);

// result8 = result8 ? "합격" : "불합격";
// d.getElementById("result8").innerHTML = `${result8}`;

//section9
// window.open(
//   "winpopup.html",
//   "pop1",
//   "width = 310. height = 420, left = 300, top = 50"
// );

// //section10 set & clear, add & delete
// var addNum = 0;
// var subNum = 1000;

// var auto_1 = setInterval(function () {
//   addNum++;
//   d.getElementById("plus").innerHTML = `addNum: ${addNum}<br>`;
// }, 3000);

// var auto_2 = setInterval(function () {
//   subNum--;
//   d.getElementById("minus").innerHTML = `subNum: ${subNum}`;
// }, 3000);

// //section11 timeout으로 설정한 ms이후 코드를 1회 수행하고 중단
// var addNum2 = 0;
// var auto = setTimeout(function() {
//     addNum2++;
//     d.getElementById("result11").innerHTML = `${addNum2}`;
// }, 5000);

//section12 개발자도구에서 OS 설정 후 새로고침하여 확인가능
var info = navigator.userAgent.toLowerCase();
var osImg = null;

if(info.indexOf('windows') >= 0) {
    osImg = "windows.png";
} else if(info.indexOf('macintosh') >= 0) {
    osImg = "macintosh.png";
} else if(info.indexOf('iphone') >= 0) {
    osImg = "iphone.png";
} else if (info.indexOf('android') >= 0) {
    osImg = "android.png";
}

d.getElementById("result12").innerHTML = `<img src="./images/${osImg}"><br>`;
var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;

d.getElementById("result12").innerHTML += `모니터 해상도 너비: ${sc_w}px<br>`;
d.getElementById("result12").innerHTML += `모니터 해상도 높이: ${sc_h}px<br>`;

//section13
var phoneNum = "010-2345-1234";
var result_1 = phoneNum.substring(0, 9);
d.getElementById("result13").innerHTML = `${result_1}****<br>`;

var imgSrc = "images/bnt_out.jpg";
var result_2 = imgSrc.replace("out", "over");
d.getElementById("result13").innerHTML += `${result_2}`;

//section14
var menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
var menuNum = Math.floor(Math.random()*menu.length);
var result14 = menu[menuNum];
d.getElementById("result14").innerHTML = `선택 메뉴: ${result14}`;