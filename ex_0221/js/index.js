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
