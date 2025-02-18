var d = document;

var num1 = 15;
var num2 = 2;
var result;

//plus
result = num1 + num2;
d.write(result, "<br>");
//minus
result = num1 - num2;
d.write(result, "<br>");
//multiple
result = num1 * num2;
d.write(result, "<br>");
//division
result = num1 / num2;
d.write(result, "<br>");
//remain
result = num1 % num2;
d.write(result, "<br><hr>");

var t1 = "학교종이";
var t2 = " 땡땡땡 ";
var t3 = 8282;
var t4 = " 어서 모이자";
var result2;

result2 = t1 + t2 + t3 + t4;
d.write(result2, "<br><hr>");

const year = 2002;
const conutry = "대한민국";
const eventName = "월드컵";
const str_1 = `${year}년 ${conutry} ${eventName} 개최<br><br>`;

d.write(str_1);

const age = 10;
const afterYear = 10;

const str_2 = `현재 나이는 ${age}살이지만<br>
${afterYear}년 후에는 ${age + afterYear}살이 됩니다.<br><hr>`;

d.write(str_2);

var num3 = 10;
var num4 = 3;

//A += B >>>> A = A + B
num3 += num4;
d.write(num3, "<br>");
//수식 누적으로 A값이 바뀜. (result를 사용하면 값 변경 없음.)
num3 -= num4;
d.write(num3, "<br>");

num3 *= num4;
d.write(num3, "<br>");

num3 %= num4;
d.write(num3, "<br><hr>");

var str = "<table border = 1>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table><hr>";

d.write(str);

var num5 = 10;
var num6 = 20;
var result3;

num5--;
d.write(num5, "<br>");

num5++;
d.write(num5, "<br>");

result3 = num6++;
d.write(result3, "&nbsp;");
d.write(num6, "<br>");

result3 = ++num6;
d.write(result3, "&nbsp;");
d.write(num6, "<br><hr>");

var a = 10;
var b = 20;
var c = 10;
var f = "20";
var result4;

result4 = a > b;
d.write("<h3>10 > 20 비교</h3>", result4, "<br>");

result4 = a < b;
d.write("<h3>10 < 20 비교</h3>", result4, "<br>");

result4 = a <= b;
d.write("<h3>10 <= 20 비교</h3>", result4, "<br>");

//값만 동일하면 타입 무관하게 true 출력
result4 = b == f;
d.write('<h3>20 == "20" 비교</h3>', result4, "<br>");

result4 = a != b;
d.write("<h3>10 != 20 비교</h3>", result4, "<br>");

//타입과 값 모두 동일해야 ture 출력
result4 = b === f;
d.write('<h3>20 === "20" 비교</h3>', result4, "<br><hr>");

var a1 = 10;
var b1 = 20;
var m1 = 30;
var n1 = 40;

var result5;

//or 연산은 값 중 하나라도 true면 true 출력
result5 = a1 > b1 || b1 >= m1 || m1 > n1;
d.write("<h3>10 > 20 or 20 >= 30 or 30 > 40</h3>", result5, "<br>");

result5 = a1 > b1 || b1 >= m1 || m1 <= n1;
d.write("<h3>10 > 20 or 20 >= 30 or 30 <= 40</h3>", result5, "<br>");

//and 연산은 값 중 하나라도 false면 false 출력
result5 = a1 <= b1 && b1 >= m1 && m1 <= n1;
d.write("<h3>10 <= 20 and 20 >= 30 and 30 <= 40</h3>", result5, "<br>");

result5 = a1 <= b1 && b1 <= m1 && m1 <= n1;
d.write("<h3>10 <= 20 and 20 <= 30 and 30 <= 40</h3>", result5, "<br>");

//결과값이 !false로 최종 true 출력
result5 = !(a1 > b1);
d.write("<h3>!(10 > 20) 결과값의 반대값 출력</h3>", result5, "<br><hr>");

var a2 = 10;
var b2 = 3;

//결과값이 true 일때 java, false 일때 hello
var result6 = a2 > b2 ? "javascript" : "hello";
d.write(result6, "<hr>");

var userHeight = 180;
var userWeight = 74;

var normal_w = (userHeight - 100) * 0.9;
d.write("<h3>(신장 - 100) * 0.9</h3>", normal_w, "<hr>");

var name = prompt("당신의 이름은?", "");
var height = prompt("당신의 키는?", "0");
var weight = prompt("당신의 체중은?", "0");

var normal_w1 = (height - 100) * 0.9;
var result7 = weight >= normal_w1 - 5 && weight <= normal_w1 + 5;
result7 = result7 ? "적정 체중입니다." : "적정 체중이 아닙니다.";
d.write("적정 체중: " + normal_w1, "<br>");
d.write(name + "님은 " + result7, "<br><hr>");

var price1 = 3000;
var price2 = 6000;
var price3 = 3000;

var total = price1 + price2 + price3;
result8 = total > 10000 ? (total - 10000) + "원 초과" : "돈 관리 잘 했어요!";
d.write("<h3>66 Page Q1</h3>", result8, "<hr>");

var aver = (1200 + 1300 + 1000) / 3;
var four = prompt("4분기 판매량 입력", "");
var mas1 = "판매량이 평균 이상입니다.", mas2 = "판매량이 평균 미달입니다.";

var result9 = four >= aver ? mas1 : mas2;
//document는 화면에 직접 결과값 표시
d.write("<h3>66 Page Q2</h3>", "평균 판매량: ", aver, "<br>")
d.write(result9, "<br><hr>")

//디버깅모드의 console창에 결과값 표시
console.log(aver);