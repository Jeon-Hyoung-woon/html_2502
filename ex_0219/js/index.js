var d = document;

//프롬프트로 변수를 받아 제어문으로 조건부 표시
var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", "0");

if (walkAmount >= 10000) {
  d.getElementById("book1").innerHTML =
    "매우 좋은 습관을 지니고 계시는군요!" + "<br>";
}
d.getElementById("book1").innerHTML += "The end...";

//프롬프트로 통화량 받아 제어문으로 조건부 표시
var min = prompt("당신의 하루 통화량은 몇 분인가요?", "0");

if (min >= 60) {
  d.getElementById("book2").innerHTML = "많이 사용하는 편이네요." + "<br>";
}
d.getElementById("book2").innerHTML += "-End-";

//프롬프트로 이름을 받아 표시
var userName = prompt("방문자의 이름은?", "");

if (userName) {
  d.getElementById("book3").innerHTML =
    userName + "님 반갑습니다! 방문을 환영합니다.";
}

//프롬프트로 변수를 받아 나누기를 통해 홀짝을 구분하여 표시
var num = prompt("당신이 좋아하는 숫자는?", "0");

if (num % 2 == 0) {
  d.getElementById("book4").innerHTML = "당신이 좋아하는 숫자는 짝수입니다.";
} else {
  d.getElementById("book4").innerHTML = "당신이 좋아하는 숫자는 홀수입니다.";
}

//프롬프트 창의 확인(true) 및 취소(flase)에 따라 문구 표시
var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if (result) {
  d.getElementById("book5").innerHTML = "탈퇴 처리되었습니다.";
} else {
  d.getElementById("book5").innerHTML = "탈퇴 취소되었습니다.";
}

//프롬프트 창에서 값을 받아 해당하는 범위 내의 조건부 텍스트 표시
var mon = prompt("현재는 몇 월입니까?", "0");

if (mon >= 9 && mon <= 11) {
  d.getElementById("book6").innerHTML = "독서의 계절 가을이네요!";
} else if (mon >= 6 && mon < 9) {
  d.getElementById("book6").innerHTML = "여행가기 좋은 여름이네요!";
} else if (mon >= 3 && mon < 6) {
  d.getElementById("book6").innerHTML = "햇살 가득한 봄이네요!";
} else if (mon == 12 || (1 <= mon && mon < 3)) {
  d.getElementById("book6").innerHTML = "스키의 계절 겨울이네요!";
} else {
  d.getElementById("book6").innerHTML = "정확한 값이 아닙니다.";
}

//아이디 및 비밀번호 값 지정 후 사용자에게 값을 받아 해당값과 동일한지 확인
var id = "easy1004";
var pw = "112233";

var user_id = prompt("아이디는?", "");
// var user_pw = prompt("비밀번호는?", "");

//아이디 비교 후 비밀번호 비교시의 상황을 위해 if 중첩문
//아이디 확인 후 비밀번호의 변수를 받아오고 맞으면 pass 틀리면 reload로 수정함.
if (id == user_id) {
  var user_pw = prompt("비밀번호는?", "");
  if (pw == user_pw) {
    d.getElementById("book7").innerHTML = user_id + "님 반갑습니다!";
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}

let number = 10;
let use = "홍길동";

//만약 괄호 내 let number가 삭제되면 출력은 number + 10으로 됨. 지역변수로 괄호 밖으로 나가면 사라짐
//지역변수 let은 해당 영역을 벗어나면 사용 불가능함.
if (number > 5) {
  let number = 50;
  number = number + 10;
}
d.getElementById("book8").innerHTML = `${number} <br>`;

if (use != "") {
  use = "김길동";
}
d.getElementById("book9").innerHTML = `${use} <br>`;

//변수를 통해 사이트 이름 받기
var site = prompt(
  "네이버, 다음, 네이트, 구글 중 즐겨 사용하는 포털 검색 사이트는?",
  ""
);
//스위치를 통해 선택된 사이트로 이동을 위해 변수 선언
var url;

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
