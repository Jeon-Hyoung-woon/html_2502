var d = document;

const element = d.getElementById("intro");

d.getElementById("demo1").innerHTML =
  "이 텍스트는 첫 문단 : " + element.innerHTML;

//문단 태그 중 첫번째를 찾는 코드이나 첫번째 section까지 포함되어 3번째를 검색함.
const element2 = d.getElementsByTagName("p");

d.getElementById("demo2").innerHTML =
  "이 텍스트는 첫 문단 : " + element2[3].innerHTML;

//div id인 main을 상수로 두고 y에서 상수x 내의 p tag 검색
const x = d.getElementById("main");
const y = x.getElementsByTagName("p");

d.getElementById("demo3").innerHTML =
  "div class: main에 있는 첫번째 문단 : " + y[0].innerHTML;

const z = d.getElementsByClassName("intro2");
d.getElementById("demo4").innerHTML =
  "클래스 intro2 중 첫번째 문단 : " + z[0].innerHTML;

const x1 = d.querySelectorAll("p.intro3");
d.getElementById("demo5").innerHTML =
  "클래스 intro3 중 두번째 문단 : " + x1[1].innerHTML;

const x2 = d.forms["frm1"];
let text = "";
for (let i = 0; i < x2.length; i++) {
  text += x2.elements[i].value + "<br>";
}
d.getElementById("demo6").innerHTML = text;

d.getElementById("p1").innerHTML = "자바스크립트가 HTML 텍스트를 지워버림.";

//처음 선언을 element3으로 하였으나 글자가 변경되지 않아 head로 상수 수정함.
const head = d.getElementById("id01");
head.innerHTML = "여기에 작성한게 표시됨.";

d.getElementById("image1").src = "./images/pic2.jpg";

d.getElementById("demo7").innerHTML = "Date : " + Date();
