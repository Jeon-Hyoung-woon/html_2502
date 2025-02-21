var d = document;

//100Page section1, 객체 메서드 생성 후 호출
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  d.getElementById("book1").innerHTML += `tv 색상 : ${this.color}<br>`;
  d.getElementById("book1").innerHTML += `tv 가격 : ${this.price}<br><br>`;
};

var car = {
  color: "black",
  price: 5000000,
  info: function () {
    d.getElementById("book2").innerHTML += `car 색상 : ${this.color}<br>`;
    d.getElementById("book2").innerHTML += `car 가격 : ${this.price}<br>`;
  },
};

d.getElementById("book1").innerHTML = "<h1>tv 객체 메서드 호출</h1>";
tv.info();

d.getElementById("book2").innerHTML = "<h1>car 객체 메서드 호출</h1>";
car.info();

//103Page sections2, 날짜정보 생성
var today = new Date();
var nowMonth = today.getMonth(),
  nowDate = today.getDate(),
  nowDay = today.getDay();

d.getElementById("book3").innerHTML = "<h1>오늘 날짜</h1>";
d.getElementById("book3").innerHTML += `${nowMonth + 1}월&nbsp;`;
d.getElementById("book3").innerHTML += `${nowDate}일&nbsp;`;
switch (nowDay) {
  case 0:
    x = "일";
    break;
  case 1:
    x = "월";
    break;
  case 2:
    x = "화";
    break;
  case 3:
    x = "수";
    break;
  case 4:
    x = "목";
    break;
  case 5:
    x = "금";
    break;
  case 6:
    x = "토";
    break;
  default:
    0;
}
if (x) d.getElementById("book3").innerHTML += `${x}요일<br>`;

var worldcup = new Date(2002, 4, 31);
var theMonth = worldcup.getMonth(),
  theDate = worldcup.getDate(),
  theDay = worldcup.getDay();

d.getElementById("book4").innerHTML = "<h1>월드컵 날짜 정보</h1>";
d.getElementById("book4").innerHTML += `${theMonth}월&nbsp;`;
d.getElementById("book4").innerHTML += `${theDate}일&nbsp;`;

switch (theDay) {
  case 0:
    y = "일";
    break;
  case 1:
    y = "월";
    break;
  case 2:
    y = "화";
    break;
  case 3:
    y = "수";
    break;
  case 4:
    y = "목";
    break;
  case 5:
    y = "금";
    break;
  case 6:
    y = "토";
    break;
  default:
    0;
}
if (theDay) d.getElementById("book4").innerHTML += `${y}요일<br>`;

//104 Page section3, 시간 객체를 이용하여 남은 기간 계산
var nowday = new Date();
var nowYear = nowday.getFullYear();

var nowDate = new Date(nowYear, 11, 31);
var diffDate = nowDate.getTime() - nowday.getTime();

//1sec = 1000msec, 시간 객체 단위는 msec이므로
//1000 > 1초 > 1분 > 1시간 > 24시간 곱하여 계산값을 나눠 일단위로 환산함.
var result = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
d.getElementById("book5").innerHTML = `연말까지 ${result}일 남았습니다.`;

//105 Page section4, 수학 객체 이해
var num = 2.1234;

var maxNum = Math.max(10, 5, 8, 30),
  minNum = Math.min(10, 5, 8, 30),
  roundNum = Math.round(num),
  floorNum = Math.floor(num),
  ceilNum = Math.ceil(num),
  rndNum = Math.random(),
  piNum = Math.PI;

d.getElementById("book6").innerHTML = `5, 8, 10, 30 중 max값 : ${maxNum}<br>`;
d.getElementById("book6").innerHTML += `5, 8, 10, 30 중 min값 : ${minNum}<br>`;
d.getElementById(
  "book6"
).innerHTML += `2.1234의 소수점 첫째 자리 반올림 : ${roundNum}<br>`;
d.getElementById(
  "book6"
).innerHTML += `2.1234의 소수점 첫째 자리 내림 : ${floorNum}<br>`;
d.getElementById(
  "book6"
).innerHTML += `2.1234의 소수점 첫째 자리 올림 : ${ceilNum}<br>`;
//난수를 정수로 받는 경우 : Math.floor(Math.random()*11)
//특정 구간 난수를 정수로 받는 경우 : Math.floor(Math.random()*(구간 최대 - 구간 최소 +1)) + 구간 최소
d.getElementById("book6").innerHTML += `0과 1사이의 난수 반환 : ${rndNum}<br>`;
d.getElementById("book6").innerHTML += `원주율 상수 반환 : ${piNum}<br>`;

var game = prompt("가위, 바위, 보 중 선택하여 입력", "ex)가위");
var gameNum;
switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 입력하였습니다.");
    location.reload();
}

var com = Math.ceil(Math.random() * 3);

if (gameNum == com) {
  d.getElementById("book7").innerHTML = "비겼습니다.";
} else if (gameNum == 1 && com == 2) {
  d.getElementById("book7").innerHTML = "졌습니다.";
} else if (gameNum == 1 && com == 3) {
  d.getElementById("book7").innerHTML = "이겼습니다.";
} else if (gameNum == 2 && com == 1) {
  d.getElementById("book7").innerHTML = "이겼습니다.";
} else if (gameNum == 2 && com == 3) {
  d.getElementById("book7").innerHTML = "졌습니다.";
} else if (gameNum == 3 && com == 1) {
  d.getElementById("book7").innerHTML = "졌습니다.";
} else {
  d.getElementById("book7").innerHTML = "이겼습니다.";
}

switch (com) {
  case 1:
    z = "<img src='./images/scissors.png'><br>가위";
    break;
  case 2:
    z = "<img src='./images/rock.png'><br>바위";
    break;
  case 3:
    z = "<img src='./images/paper.png'><br>보";
    break;
  default:
}

d.getElementById("book7").innerHTML += `<br><br>컴퓨터 : <br>${z}`;
