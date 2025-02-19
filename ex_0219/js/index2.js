var d = document;

//section1
function validateForm() {
  let x = d.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

//section2
function myFunction() {
  let x = d.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  d.getElementById("demo1").innerHTML = text;
}

//section4
d.getElementById("p2").style.color = "blue";
d.getElementById("p2").style.fontFamily = "Arial";
d.getElementById("p2").style.fontSize = "larger";

//section7
function changeText(id) {
  id.innerHTML = "바뀌는 글자";
}

//section8
function displayDate() {
  d.getElementById("demo2").innerHTML = Date();
}

//section9, 8과 동일한 기능으로 어떤 버튼을 눌러도 갱신은 표시된곳.
d.getElementById("myBtn").onclick = displayDate2;

function displayDate2() {
  d.getElementById("demo3").innerHTML = Date();
}

//section10
function checkCookies() {
  let text2 = "";
  if (navigator.cookieEnabled == true) {
    text2 = "Cookies are enabled.";
    let myCookie = "name=skc";
    document.cookie = myCookie;
    console.log(document.cookie);
  } else {
    text2 = "Cookies are not enabled.";
  }

  d.getElementById("demo4").innerHTML = text2;
}

//section11
function upperCase() {
  const x = d.getElementById("fname2");
  x.value = x.value.toUpperCase();
}

//section12
function upperCase2() {
  const y = d.getElementById("fname3");
  y.value = y.value.toUpperCase();
}

//section13
function mOver(obj) {
  obj.innerHTML = "마우스 오버시 효과";
}

function mOut(obj) {
  obj.innerHTML = "마우스 아웃시 효과";
}

//
const initialColor2 = "brown";
const initialText2 = "여기에 마우스를 올려보세요.";

function timeOut(obj) {
  setTimeout(() => {
    obj.style.backgroundColor = initialColor2;
    obj.innerHTML = initialText2;
  }, 2000);
}

//section14
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "마우스 클릭 풀기";
}

function mUp(obj) {
  obj.style.backgroundColor = "#d94a38";
  obj.innerHTML = "클릭 풀고 난 후";
}

//마우스가 창에서 떨어졌을 때 기능을 부여하기 위해 초기값을 변수설정
const initialColor = "brown";
const initialText = "여기를 클릭";

//스타일과 텍스트를 초기값으로 부여, 직접 텍스트로 쳐도 됨.
function mLeave(obj) {
  obj.style.backgroundColor = initialColor;
  obj.innerHTML = initialText;
}
