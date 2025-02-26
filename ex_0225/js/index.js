var d = document;

//section1
d.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  d.getElementById("result1").innerHTML = Date();
}

//section2
d.getElementById("myBtn2").addEventListener("click", function () {
  alert("알람창에 메세지 작성");
});

//section3
d.getElementById("myBtn3").addEventListener("click", myFunction1);

function myFunction1() {
  alert("알람창 띄워서 전달");
}

//section4 한개의 버튼에 여러 이벤트 적용
var x = d.getElementById("myBtn4");
x.addEventListener("click", myFunction2);
x.addEventListener("click", someOtherFunction);

function myFunction2() {
  alert("첫번째로 뜨는 알람창");
}

function someOtherFunction() {
  alert("이게 연속적으로 뜨는 알람창");
}

//section5
var y = d.getElementById("myBtn5");
y.addEventListener("mouseover", myFunction3);
y.addEventListener("click", mySecondFunction);
y.addEventListener("mouseout", myThirdFunction);

function myFunction3() {
  d.getElementById("result5").innerHTML += `마우스 오버<br>`;
}

function mySecondFunction() {
  d.getElementById("result5").innerHTML += `마우스 클릭<br>`;
}

function myThirdFunction() {
  d.getElementById("result5").innerHTML += `마우스 아웃<br>`;
}

//section6
window.addEventListener("resize", function () {
  d.getElementById("result6").innerHTML = Math.random();
});

//section7
let p1 = 5;
let p2 = 7;
d.getElementById("myBtn7").addEventListener("click", function () {
  myFunction5(p1, p2);
});

function myFunction5(a, b) {
  d.getElementById("result7").innerHTML = a * b;
}

//section8
d.getElementById("myP1").addEventListener(
  "click",
  function () {
    alert("하얀색 영역 클릭함");
  },
  false
);
d.getElementById("myDiv1").addEventListener(
  "click",
  function () {
    alert("오렌지색 영역 클릭함");
  },
  false
);

d.getElementById("myP2").addEventListener(
  "click",
  function () {
    alert("하얀색 영역 클릭함");
  },
  true
);
d.getElementById("myDiv2").addEventListener(
  "click",
  function () {
    alert("오렌지색 영역 클릭함");
  },
  true
);

//section9
d.getElementById("myDIV").addEventListener("mousemove", myFunction9);
function myFunction9() {
  d.getElementById("result9").innerHTML = Math.random();
}
function removeHandler() {
  d.getElementById("myDIV").removeEventListener("mousemove", myFunction9);
}
