var d = document;
var totalImages = 6;

var num = 1;
function gallery(direct) {
  if (direct) {
    num = (num % totalImages) + 1;
  } else {
    num = num === 1 ? totalImages : num - 1;
  }
  var imgTag = d.getElementById("photo");
  imgTag.setAttribute("src", "./images/food" + num + ".jpg");
}
