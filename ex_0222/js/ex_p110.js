var d = document;

//section1 배열 지정 후 callback
var arr = [30, "따르릉", true];

d.getElementById("test1").innerHTML = "<h3>배열값 가져오기-1</h3>";
d.getElementById("test1").innerHTML += `arr 1번째 : ${arr[0]}<br>`;
d.getElementById("test1").innerHTML += `arr 2번째 : ${arr[1]}<br>`;
d.getElementById("test1").innerHTML += `arr 3번째 : ${arr[2]}<br>`;

d.getElementById("test2").innerHTML = `<h3>배열값 가져오기-2</h3>`;
for (var i = 0; i < arr.length; i++) {
  d.getElementById("test2").innerHTML += `arr 1~3번째 순차배열 : ${arr[i]}<br>`;
}

d.getElementById("test3").innerHTML = `<h3>배열값 가져오기-3</h3>`;
for (i in arr) {
  d.getElementById("test3").innerHTML += `for 반복문 : ${arr[i]}<br>`;
}

//section2 배열 객체 메소드 사용
var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

d.getElementById("array").innerHTML = `array_1 : ${arr_1}<br>`;
d.getElementById("array").innerHTML += `array_2 : ${arr_2}`;

var result = arr_1.join("-");
d.getElementById("join").innerHTML = `join"-" : ${result}`;

result = arr_1.concat(arr_2);
d.getElementById("concat").innerHTML = `1 concat 2 : ${result}`;

result = arr_1.slice(1, 3);
d.getElementById("slice").innerHTML = `1 slice (1,3) : ${result}`;

arr_1.sort();
d.getElementById("sort").innerHTML = `array_1 sort : ${arr_1}`;

//단순 reverse는 배열을 뒤집기 때문에 sort 후 reverse로 내림차순 배열 가능함.
arr_2.reverse();
d.getElementById("reverse").innerHTML = `array_2 reverse : ${arr_2}`;

//section3 배열 객체 메소드 사용2
var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

d.getElementById("array2").innerHTML = `greenArray : ${greenArr}<br>`;
d.getElementById("array2").innerHTML += `yellowArray : ${yellowArr}`;

greenArr.splice(2, 1, "서초", "역삼");
d.getElementById("splice").innerHTML = `splice (2, 1, 서초, 역삼) : ${greenArr}`;

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

d.getElementById("pop").innerHTML += `<br>yellowArray pop : data1_${data1}`;
d.getElementById("shift").innerHTML += `<br>yellowArray shift : data2_${data2}`;

yellowArr.push(data2);
d.getElementById("push").innerHTML = `yellow push data2 : ${yellowArr}`;

yellowArr.unshift(data1);
d.getElementById("unshift").innerHTML = `yellow unshift data1 : ${yellowArr}`;

//section4 객체 메소드와 속성
var t = "Hello Thank you good luck to you";

d.getElementById("array3").innerHTML = `변수 저장값 : ${t}`;

d.getElementById("demo").innerHTML = `charAt(16) : ${t.charAt(16)}<br>`;
d.getElementById("demo").innerHTML += `indexOf(you) : ${t.indexOf("you")}<br>`;
d.getElementById("demo").innerHTML += `indexOf(you, 16) : ${t.indexOf(
  "you",
  16
)}<br>`;
d.getElementById("demo").innerHTML += `lastIndexOf(you) : ${t.lastIndexOf(
  "you"
)}<br>`;
d.getElementById("demo").innerHTML += `lastIndexOf(you, 25) : ${t.lastIndexOf(
  "you",
  25
)}<br>`;
d.getElementById("demo").innerHTML += `match(luck) : ${t.match("luck")}<br>`;
d.getElementById("demo").innerHTML += `search(you) : ${t.search("you")}<br>`;
d.getElementById("demo").innerHTML += `substr(deprecated: 21, 4) : ${t.substr(
  21,
  4
)}<br>`;
d.getElementById("demo").innerHTML += `substring(6, 12) : ${t.substring(6, 12)}<br>`;
d.getElementById("demo").innerHTML += `replace(you, me) : ${t.replace("you", "me")}<br>`;
d.getElementById("demo").innerHTML += `toLowerCase : ${t.toLowerCase()}<br>`;
d.getElementById("demo").innerHTML += `toUpperCase : ${t.toUpperCase()}<br>`;
d.getElementById("demo").innerHTML += `length : ${t.length}<br>`;

var s = t.split(" ");

d.getElementById("demo2").innerHTML = `s index of 1th : ${s[0]}<br>`;
d.getElementById("demo2").innerHTML += `s index of 5th : ${s[4]}<br>`;

var str = "A";
var t = str.charCodeAt(0);

d.getElementById("demo2").innerHTML += `A Code : ${t}<br>`;
d.getElementById("demo2").innerHTML += `Code to text : ${String.fromCharCode(
  65
)}<br>`;
