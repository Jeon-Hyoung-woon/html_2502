var d = document;

//section1, P태그에 h1태그 내용 넣기
d.getElementById("id02").innerHTML = d.getElementById("id01").innerHTML;

//section2, firstChild로 내용 불러오기
d.getElementById("id04").innerHTML =
  d.getElementById("id03").firstChild.nodeValue;

//section3, childNodes로 내용 불러오기
d.getElementById("id06").innerHTML =
  d.getElementById("id05").childNodes[0].nodeValue;

//section4, body에 있는 전체 내용 불러오기
// d.getElementById("demo1").innerHTML = d.body.innerHTML;

//section5, document 전체 요소 불러오기
// d.getElementById("demo2").innerHTML = d.documentElement.innerHTML;

//section6, 요소 이름 불러오기
d.getElementById("id08").innerHTML = d.getElementById("id01").nodeName;

//section7, 요소 타입 불러오기
d.getElementById("id10").innerHTML = d.getElementById("id09").nodeType;

//section8, 특정 요소에 새로운 요소와 문자 넣기
//para 안에 node 변수가 들어가고 para의 요소 위치를 div1하단으로 넣음.
const para = d.createElement("p");
const node = d.createTextNode("새로운 문구");
para.appendChild(node);
const element = d.getElementById("div1");
element.appendChild(para);

//section9, 새로운 문구를 #p3보다 위로 넣음
//para1 안에 node1 텍스트 값을 만듦.
const para1 = d.createElement("p");
const node1 = d.createTextNode("새로운 문구 추가");
para1.appendChild(node1);

//elemnt1로 div2 요소를 지정하고 child 요소 지정 후
//insertBefore(새로운 요소를, 해당 요소 앞으로) 넣음.
const element1 = d.getElementById("div2");
const child = d.getElementById("p3");
element1.insertBefore(para1, child);

//section10, 버튼에 요소를 삭제하기 위한 기능 추가
function myFunction() {
  d.getElementById("p5").remove();
}

//section11, 처음부터 문단을 삭제하여 표기
const parent = d.getElementById("div3");
const child2 = d.getElementById("p7");
parent.removeChild(child2);

//section12, 기존의 id=p9의 p 태그 대신 새로운 문단을 대체
const parent2 = d.getElementById("div4");
const child3 = d.getElementById("p9");
const para2 = d.createElement("p");
const node2 = d.createTextNode("새로운 문단");
para2.appendChild(node2);
parent2.replaceChild(para2, child3);

//section13, tagName만 사용하면 전체 문서 중 불러와 수정함.
//x를 ClassName으로 불러오면 오류남.
const x = d.getElementById("s13");
const y = x.getElementsByTagName("p");

d.getElementById("demo3").innerHTML = "2번째 문단의 내용은 : " + y[1].innerHTML;

//section14, 13과 마찬가지로 내용 수정.
//p 태그의 개수를 세기 때문에 해당 문자가 들어가는 p태그 포함.
const x2 = d.getElementById("s14");
const y2 = x2.getElementsByTagName("p");

d.getElementById("demo4").innerHTML =
  "이 문서는 " + y2.length + "개의 문단으로 구성되어 있습니다.";

//section15, y3에 section child p tag 검색하여 사용
const x3 = d.getElementById("s15");
const y3 = x3.getElementsByTagName("p");

//for문에서 length를 이용하여 해당 태그 전체 스타일 변경
function myFunction2() {
  for (let i = 0; i < y3.length; i++) {
    y3[i].style.color = "brown";
  }
}

//section16, 마찬가지로 y4에 s16 in p를 검색
const x4 = d.getElementById("s16");
const y4 = x4.querySelectorAll("p");

d.getElementById("demo5").innerHTML =
  "이 문서의 두번째 문단은 : " + y4[1].innerHTML;

//section17, length를 이용한 문서의 특정 요소 개수 확인
const x5 = d.getElementById("s17");
const y5 = x5.querySelectorAll("p");

d.getElementById("demo6").innerHTML =
  "이 문서는 총 " + y5.length + "개의 문단을 가지고 있다.";

//section18, 문서의 특정 요소 스타일 변경
const x6 = d.getElementById("s18");
const y6 = x6.querySelectorAll("p");

function myFunction3() {
  for (let i = 0; i < y6.length; i++) {
    y6[i].style.color = "white";
  }
}

//BOM
//section19, window inner width, height 확인
d.getElementById("demo7").innerHTML =
  "window width : " +
  window.innerWidth +
  "px<br>" +
  "wondow height : " +
  window.innerHeight +
  "px";

//section20, Screen inner width 확인 (모니터 screen)
d.getElementById("demo8").innerHTML = "Screen width is " + screen.width;

//section21, Screen inner height 확인 (모니터 screen)
d.getElementById("demo9").innerHTML = "Screen height is " + screen.height;

//section22, 사용자가 사용 가능한 최대 넓이 (가로)
d.getElementById("demo10").innerHTML =
  "Available screen width is " + screen.availWidth;

//section23, 사용자가 사용 가능한 최대 높이 (세로)
d.getElementById("demo11").innerHTML =
  "Available screen height is " + screen.availHeight;

//section24, screen color depth
d.getElementById("demo12").innerHTML =
  "Screen color depth is " + screen.colorDepth;

//section25, screen pixel depth
d.getElementById("demo13").innerHTML =
  "Screen puxel depth is " + screen.pixelDepth;
