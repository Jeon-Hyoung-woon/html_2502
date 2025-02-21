var d = document;

//section1
d.getElementById(
  "demo1"
).innerHTML = `이 페이지의 전체 URL : ${window.location.href}`;

//section2
d.getElementById(
  "demo2"
).innerHTML = `이 페이지의 host : ${window.location.hostname}`;

//section3
d.getElementById(
  "demo3"
).innerHTML = `이 페이지의 경로는 ${window.location.pathname}`;

//section4
d.getElementById(
  "demo4"
).innerHTML = `이 페이지의 protocol은 ${window.location.protocol}`;

//section5
d.getElementById(
  "demo5"
).innerHTML = `현재 페이지의 URL 포트넘버는 ${window.location.port}`;

//section6
function newDoc() {
  window.location.assign("https://www.naver.com");
}

//section7
function backStat() {
  window.history.back();
}

function forWard() {
  window.history.forward();
}

//section8
d.getElementById(
  "demo6"
).innerHTML = `navigator.cookieEnabled is ${navigator.cookieEnabled}`;

//section9, appName은 삭제 예정 기능
d.getElementById(
  "demo7"
).innerHTML = `navigator.appName is ${navigator.appName}`;

//section10
d.getElementById(
  "demo8"
).innerHTML = `navigator.appCodeName is ${navigator.appCodeName}`;

//section11
d.getElementById(
  "demo9"
).innerHTML = `navigator.product is ${navigator.product}`;

//section12
d.getElementById("demo10").innerHTML = navigator.appVersion;

//section13 not deprecated
d.getElementById("demo11").innerHTML = navigator.userAgent;

//section14
d.getElementById(
  "demo12"
).innerHTML = `navigator.platform is ${navigator.platform}`;

//section15 not deprecated
d.getElementById(
  "demo13"
).innerHTML = `navigator.language is ${navigator.language}`;

//section16 not deprecated
d.getElementById(
  "demo14"
).innerHTML = `navigator.onLine is ${navigator.onLine}`;

//section17
d.getElementById(
  "demo15"
).innerHTML = `javaEnabled is ${navigator.javaEnabled()}`;

//section18
function myFunction() {
  alert("Hello");
}

//section19
function myFunction2() {
  alert("Hello");
}

//section20 최초 로딩 1초 후부터 1초간격으로 갱신
setInterval(myTimer, 1000);

function myTimer() {
  const e = new Date();
  d.getElementById("demo16").innerHTML = e.toLocaleTimeString();
}

//section21 진행중인 시계를 버튼으로 중지시키기
let myVar2 = setInterval(myTimer2, 1000);
function myTimer2() {
  const f = new Date();
  d.getElementById("demo17").innerHTML = f.toLocaleTimeString();
}

//Cookie
function setCookie(cname, cvalue, exdays) {
  const g = new Date();
  g.setTime(g.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = `expires = ${g.toUTCString()}`;
  d.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(d.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again" + user);
  } else {
    user = prompt("이름을 입력해 주세요", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}
