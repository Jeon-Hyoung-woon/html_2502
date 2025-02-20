var d = document;

//section1, 변수를 통해 사이트 이름 받기
var site = prompt(
  "네이버, 다음, 네이트, 구글 중 즐겨 사용하는 포털 검색 사이트는?",
  ""
);
//스위치를 통해 선택된 사이트로 이동을 위해 변수 선언
var url;
//break문이 없으면 다음 코드까지 읽음.
//입력값 : 구글, 구글과 다음 사이 break가 없으면 다음 링크로 넘어감.
switch (site) {
  case "구글":
    url = "www.google.com";
    break;
  case "다음":
    url = "www.daum.net";
    break;
  case "네이버":
    url = "www.naver.com";
    break;
  case "네이트":
    url = "www.nate.com";
    break;
  default:
    alert("보기 중 없는 사이트입니다.");
}

//switch를 통해 url를 정의하고 해당 url로 링크 이동
function openNewTab() {
  // if (url) location.href = "http://" + url;
  if (url) window.open("http://" + url, "_blank");
}

//section2, while문 텍스트 작성 시 += 복합연산 사용해야 전체 출력
var i = 1;
while (i <= 10) {
  d.getElementById("test1").innerHTML += "안녕하세요" + i + "<br>";
  i++;
}

//section3 ++ 및 -- 연산이 if에 포함되지 않도록 확인
var k = 1;
var output1 = "";
while (k <= 30) {
  if (k % 2 == 0 && k % 6 == 0) {
    output1 += k + "<br>";
  }
  k++;
}

d.getElementById("test2").innerHTML = output1;

//section4 while문으로 10 이상 전체를 포함하지만 최초 변수 선언시 20으로 limit을 둠
var j = 20;
var output = "";
while (j >= 10) {
  if (j % 2 == 0) {
    output += "<p class='blue'>" + j + "</p>";
  } else {
    output += "<p class='red'>" + j + "</p>";
  }
  j--;
}

d.getElementById("test3").innerHTML = output;

//section5 do while 기본 예제 do {}를 먼저 처리 후 while문 확인
var k = 10;
do {
  d.getElementById("test4").innerHTML = "hello!";
} while (k < 3);

//section6 for문 기본 예제 for (초기값; 조건식; 증감식)
for (var i = 1; i <= 10; i++) {
  d.getElementById("test5").innerHTML += "반복" + i + "<br>";
}

//section7 for문 안에 if, else if를 활용하여 여러 조건식을 걸어 분류
for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 7 != 0) {
    d.getElementById("test6").innerHTML += `<p class='red'>${i}_5x</p>`;
  } else if (i % 7 == 0 && i % 5 != 0) {
    d.getElementById("test6").innerHTML += `<p class='green'>${i}_7x</p>`;
  } else if (i % 7 == 0 && i % 5 == 0) {
    d.getElementById("test6").innerHTML += `<p class='aqua'>${i}_5x and 7x</p>`;
  }
}

//section8, 변수 선언 후 조건식으로 증가를 주고 if문으로 break를 걸어 종료
for (var i = 1; i <= 10; i++) {
  if (i == 6) break;
  d.getElementById("test7").innerHTML += i + "<br>";
}
d.getElementById("test7").innerHTML += "-End-";

//section9 while + continue = 코드 무시 후 조건검사
//for + continue = 코드 무시 후 증감식 적용, 3항 연산자처럼 적용됨. if (조건부) break or continue;
for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) continue;
  d.getElementById("test8").innerHTML += i + "<br>";
}
d.getElementById("test8").innerHTML += "-End-";

//section10 for 중첩문, 최초 for는 3번 실행, 3번의 실행 중 내부 for 2번 실행
for (var i = 1; i <= 3; i++) {
  for (var k = 1; k <= 2; k++) {
    d.getElementById("test9").innerHTML += i + "행" + k + "열" + "<br>";
  }
  d.getElementById("test9").innerHTML += "<br>";
}

//section11
var o = 1;
while (o <= 9) {
  d.getElementById("test10").innerHTML +=
    "5 X " + o + "&nbsp;" + "=" + "&nbsp;" + o * 5 + "<br>";
  o++;
}

//section12
var num = 1;
var t = "<table border = 1>";

for (var i = 1; i <= 5; i++) {
  t += "<tr>";
  for (var k = 1; k <= 5; k++) {
    t += "<td>" + num + "</td>";
    num++;
  }
  t += "</tr>";
}
t += "</table>";
console.log(t);
d.getElementById("test11").innerHTML += t;

//section13

for (var l = 3; l < 6; l++) {
  for (var m = 1; m < 10; m++) {
    d.getElementById("Dan").innerHTML += l + " X " + m + "=" + l * m + "<br>";
  }
  d.getElementById("Dan").innerHTML += "<br>";
}

//section14

for (var n = 3; n < 6; n++) {
  for (var p = 1; p < 10; p++) {
    if (n == 4 && p == 4) break;
    if (n == 5 && p == 3) continue;
    d.getElementById("Dan2").innerHTML += n + " X " + p + "=" + n * p + "<br>";
  }
  d.getElementById("Dan2").innerHTML += "<br>";
}
