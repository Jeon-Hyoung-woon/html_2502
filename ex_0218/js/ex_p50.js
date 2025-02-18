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
d.write(result3, "<br>");

result3 = ++num6;
d.write(result3, "<br><hr>");

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

result4 = b == f;
d.write('<h3>20 == "20" 비교</h3>', result4, "<br>");

result4 = a != b;
d.write("<h3>10 != 20 비교</h3>", result4, "<br>");

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
