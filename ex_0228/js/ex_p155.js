var d = document;

//section1
var count = 0;

//최초 출력
myFnc();
function myFnc() {
  count++;
  d.getElementById("result1").innerHTML += `hello ${count}<br>`;
}
//2회 출력
myFnc();

//선언
var theFnc = function () {
  count++;
  d.getElementById("result1").innerHTML += `bye ${count}<br>`;
};
//출력
theFnc();

//section2 array와 style지정 함수 사용함.
var color = ["white", "yellow", "aqua", "purple"];

var i = 0;
function changeColor() {
  i++;
  if (i >= color.length) {
    i = 0;
  }
  var bodyTag = d.getElementById("result2");
  bodyTag.style.backgroundColor = color[i];
}

//section3
function myFnc1(name, area) {
  d.getElementById("result3").innerHTML += `안녕하세요. ${name}입니다.<br>`;
  d.getElementById("result3").innerHTML += `사는곳은 ${area}입니다.<br><br>`;
}

myFnc1("홍당무", "서울");
myFnc1("깍두기", "부산");

//section4
var rightId = "korea";
var rightPw = "1234";
function btFunc1() {
  function login(id, pw) {
    if (id == rightId) {
      if (pw == rightPw) {
        d.getElementById("result4").innerHTML = `${id}님 방문을 환영합니다.`;
      } else {
        alert("잘못된 비밀번호입니다.");
      }
    } else {
      alert("존재하지 않는 아이디입니다.");
    }
  }

  var userId = prompt("아이디를 입력하세요.", "");
  var userPw = prompt("패스워드를 입력하세요", "");
  login(userId, userPw);
}

//section5
function btFunc2() {
  function testAvg(arrData) {
    var sum = 0;
    for (var i = 0; i < arrData.length; i++) {
      sum += Number(prompt(arrData[i] + "점수는?", "0"));
    }
    var avg = sum / arrData.length;
    return avg;
  }

  var arrSubject = ["국어", "수학"];
  var result5 = testAvg(arrSubject);

  d.getElementById("result5").innerHTML = `평균 점수는 ${result5}점 입니다.`;
}

//section6
var num6 = 1;
function gallery(direct) {
  if (direct) {
    if (num6 == 3) return;
    num6++;
  } else {
    if (num6 == 1) return;
    num6--;
  }
  var imgTag = d.getElementById("photo");
  imgTag.setAttribute("src", `./images/pic_${num6}.jpg`);
}

//section7 재귀함수
var num7 = 0;
function testFnc7() {
  num7++;
  d.getElementById("result7").innerHTML += `${num7}<br>`;
  if (num7 == 10) return;

  testFnc7();
}

testFnc7();

//section8
var num8 = 100;
function menu8() {
  num8 += 100;
  d.getElementById("result8").innerHTML = `${num8}`;
}

menu8();

function menu8() {
  d.getElementById("result8").innerHTML = `${num8}`;
}

//section9
(function () {
  var num9 = 100;
  function menu9() {
    num9 += 100;
    d.getElementById("result9").innerHTML = `${num9}`;
  }
  menu9();
}());

(function () {
  var num9 = 100;
  function menu9() {
    d.getElementById("result9").innerHTML = `${num9}`;
  }
}());

//section10
function CheckWeight(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  this.getInfo = function () {
    var str = "";
    str += `이름 : ${this.userName}, `;
    str += `키 : ${this.userHeight}, `;
    str += `몸무게 : ${this.userWeight}<br>`;
    return str;
  };
  this.getResult = function () {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.minWeight &&
      this.userWeight <= this.maxWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박달재", 180, 88);
d.getElementById("result10").innerHTML += `${jang}<br>`;
d.getElementById("result10").innerHTML += `${park}<br>`;

d.getElementById(
  "result10"
).innerHTML += `${jang.getInfo()}${jang.getResult()}<br><br>`;
d.getElementById(
  "result10"
).innerHTML += `${park.getInfo()}${park.getResult()}`;

//section11
function CheckWeight11(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  CheckWeight11.prototype.getInfo11 = function () {
    var str = "";
    str += `이름 : ${this.userName}, `;
    str += `키 : ${this.userHeight}, `;
    str += `몸무게 : ${this.userWeight}<br>`;
    return str;
  };
  CheckWeight11.prototype.getResult11 = function () {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.minWeight &&
      this.userWeight <= this.maxWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight11("장보리", 168, 62);
var park = new CheckWeight11("박달재", 180, 88);
d.getElementById("result11").innerHTML += `${jang}<br>`;
d.getElementById("result11").innerHTML += `${park}<br>`;

d.getElementById(
  "result11"
).innerHTML += `${jang.getInfo11()}${jang.getResult11()}<br><br>`;
d.getElementById(
  "result11"
).innerHTML += `${park.getInfo11()}${park.getResult11()}<br>`;

d.getElementById("result11").innerHTML += `${
  jang.getResult11 === park.getResult11
}`;

//section12
function sumFnc_1(num1, num2) {
  return num1 + num2;
}
d.getElementById("result12").innerHTML = `${sumFnc_1(1, 2)}<br>`;

const sumFnc_2 = (num1, num2) => num1 + num2;
d.getElementById("result12").innerHTML += `${sumFnc_2(10, 20)}<br>`;

const sumFnc_3 = (num1, num2) => {
  const result = `num1 + num2 = ${num1 + num2}<br>`;
  return result;
};
d.getElementById("result12").innerHTML += `${sumFnc_3(100, 200)}<br>`;

const infoFnc_1 = function (info1, info2) {
  return { name: info1, age: info2 };
};

d.getElementById("result12").innerHTML += `${infoFnc_1("홍길동", 22)}<br>`;

const infoFnc_2 = (info1, info2) => ({ name: info1, age: info2 });
d.getElementById("result12").innerHTML += `${infoFnc_2("최군", 32)}`;

//section13
const obj_1 = {
  name: "홍길동",
  infoFnc: function () {
    console.log(this);
    const innerFnc = () => {
      console.log("메서드 내의 arrow 함수 : ", this);
    };
    innerFnc();
  },
};
obj_1.infoFnc();

const obj_2 = {
  name: "홍대리",
  infoFnc: () => {
    console.log(this);
    const innerFnc = () => {
      console.log("arrow 함수 메서드에 함수 : ", this);
    };
    innerFnc();
  },
};
obj_2.infoFnc();

const btn_1 = d.querySelector(".btn-1");
const btn_2 = d.querySelector(".btn-2");

btn_1.addEventListener("click", function () {
  console.log(this);
});
btn_2.addEventListener("click", function () {
  console.log(this);
});
