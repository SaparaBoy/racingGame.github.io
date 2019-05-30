var no1 = 0;
var no2 = 0;
var you = document.getElementById("you");
var pc = document.getElementById("pc");
var result1 = document.getElementById("youresult");
var result2 = document.getElementById("pcresult");
var countbtn = document.getElementById("countbtn");
var gobtn = document.getElementById("gobtn");
alert(
  "click/tap on the go button to start game.... if you want to end of game than refresh the browser :) enjoy the game...."
);
var name = prompt("enter the name..");
document.getElementById("yourname").textContent = name;
countbtn.addEventListener("click", function() {
  result1.value = "#";
  result2.value = "#";
  if(no1>=100||no2>=100)
  {
    alert("refresh the page to play again..");
  }
   else
  {
  setTimeout(resultshow2, 2000);
  setTimeout(resultshow1, 1000);
  }
});
function resultshow2() {
  var countNO2 = parseInt(Math.random() * 6);
  if (countNO2 == 0) {
    no2 += result2.value = 6;
  } else {
    no2 += result2.value = countNO2;
  }
  if (no2 >= 100) {
    pc.style.left = `100%`;
    alert(name + " lose the game :(");
  } else {
    pc.style.left = `${no2}%`;
  }
}
function resultshow1() {
  var countNO1 = parseInt(Math.random() * 6);
  if (countNO1 == 0) {
    no1 += result1.value = 6;
  } else {
    no1 += result1.value = countNO1;
  }
  if (no1 >= 100) {
    you.style.left = `100%`;
    alert(name + " win the game :)");
  } else {
    you.style.left = `${no1}%`;
  }
}
