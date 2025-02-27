var d = document;

// // section9
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

if (info.indexOf("windows") >= 0) {
  osImg = "windows.png";
} else if (info.indexOf("macintosh") >= 0) {
  osImg = "macintosh.png";
} else if (info.indexOf("iphone") >= 0) {
  osImg = "iphone.png";
} else if (info.indexOf("android") >= 0) {
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
var menuNum = Math.floor(Math.random() * menu.length);
var result14 = menu[menuNum];
d.getElementById("result14").innerHTML = `선택 메뉴: ${result14}`;
