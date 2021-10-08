var bas = document.querySelector("#cacc");
var bas3 = document.querySelector("#caca");
var bas1 = document.querySelector("#cacb");
bas1.style.cursor = "pointer";

var namee = 0;

console.log(localStorage);
var bas4 = document.querySelector("#calc4");
var time = document.querySelector("#calc3");

var bas5 = bas1.children;
var num = "49px";
var time1;
var i;
var myArr = [];
let name = [];
bas5[0].addEventListener("click", myFunction2);
var ch = 0;
var ch1;
var j;
var k;
var sum = 0;
var sum1 = 0;

var interval;
var count = 4;
function myFunction2() {
  bas5[0].removeEventListener("click", myFunction2);
  var nam1 = document.createElement("div");
  var nam2 = document.createElement("div");
  bas1.appendChild(nam1);
  bas1.appendChild(nam2);
  myFunction();
  console.log(bas5);
}

function myFunction() {
  console.log(localStorage);
  bas1.removeChild(bas5[1]);
  bas1.removeChild(bas5[1]);

  count = 4;
  interval = window.clearInterval(fuctCountdown, 1000);
  console.log(bas5);
  bas5[0].style.fontSize = "150px";
  bas5[0].style.color = "rgb(401,399,399)";
  fuctCountdown();
  interval = window.setInterval(fuctCountdown, 1000);
}

function fuctCountdown() {
  count--;
  bas5[0].textContent = count;
  if (count == 0) {
    window.clearInterval(interval);
    fuctGame();
  }
}

function fuctGame() {
  namee++;
  var sum2 = 0;
  var milli = 0;
  var sec = 0;
  time1 = window.setInterval(countdown, 10);
  function countdown() {
    milli++;

    if (milli == 100) {
      milli = 0;
      sec++;
    }

    time.innerHTML = sec.toString() + ":" + milli.toString();
  }

  for (k = 0; k < 20; k++) {
    myArr[k] = k + 1;
  }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  shuffle(myArr);
  console.log(myArr);

  for (i = 0; i < 20; i++) {
    name[i] = document.createElement("div");
    bas1.appendChild(name[i]);
    name[i].style.border = "1px solid black";
    name[i].style.borderRadius = "7px";
    name[i].style.margin = "2px 2px";
    name[i].style.color = "green";
    name[i].style.padding = "10px";
    name[i].style.backgroundColor = "black";
    name[i].textContent = myArr[i];
    name[i].className = "Active";
    if (parseInt(name[i].textContent) < 10) {
      name[i].textContent = "0" + name[i].textContent;
    }
  }
  var bas2 = bas1.children;
  bas1.removeChild(bas2[0]);
  console.log(bas1);

  console.log(bas2[4].textContent);

  console.log(bas2[4]);
  bas1.style.display = "grid";
  bas1.style.gridTemplateColumns = "repeat(5, auto) ";
  bas1.style.gridTemplateRows = "repeat(4, auto)";
  bas1.style.margin = "0px";
  bas1.style.fontSize = "45px";

  bas2[0].addEventListener("click", () => firstfunction1(bas2[0]));
  bas2[1].addEventListener("click", () => firstfunction1(bas2[1]));
  bas2[2].addEventListener("click", () => firstfunction1(bas2[2]));
  bas2[3].addEventListener("click", () => firstfunction1(bas2[3]));
  bas2[4].addEventListener("click", () => firstfunction1(bas2[4]));
  bas2[5].addEventListener("click", () => firstfunction1(bas2[5]));
  bas2[6].addEventListener("click", () => firstfunction1(bas2[6]));
  bas2[7].addEventListener("click", () => firstfunction1(bas2[7]));
  bas2[8].addEventListener("click", () => firstfunction1(bas2[8]));
  bas2[9].addEventListener("click", () => firstfunction1(bas2[9]));
  bas2[10].addEventListener("click", () => firstfunction1(bas2[10]));
  bas2[11].addEventListener("click", () => firstfunction1(bas2[11]));
  bas2[12].addEventListener("click", () => firstfunction1(bas2[12]));
  bas2[13].addEventListener("click", () => firstfunction1(bas2[13]));
  bas2[14].addEventListener("click", () => firstfunction1(bas2[14]));
  bas2[15].addEventListener("click", () => firstfunction1(bas2[15]));
  bas2[16].addEventListener("click", () => firstfunction1(bas2[16]));
  bas2[17].addEventListener("click", () => firstfunction1(bas2[17]));
  bas2[18].addEventListener("click", () => firstfunction1(bas2[18]));
  bas2[19].addEventListener("click", () => firstfunction1(bas2[19]));

  function firstfunction1(e) {
    var namer;
    namee++;
    ++sum2;
    sum = 0;
    ch1 = e;

    if (sum2 != e.textContent) {
      window.alert("click in ascending order");
      --sum2;
    } else {
      e.textContent = parseInt(e.textContent) + 20;
    }
    if (e.textContent > 40) {
      e.textContent = "41";
      e.style.color = "black";
    }

    for (i = 0; i < bas2.length; i++)
      if (bas2[i].textContent == 41) {
        ++sum;
      }

    if (sum == bas2.length) {
      window.clearInterval(time1);
      for (i = 0; i < bas2.length + i; i++) {
        bas1.removeChild(bas2[0]);
      }
      if (bas4.innerHTML == "0:00") {
        bas4.innerHTML = time.innerHTML;
        window.localStorage.setItem(
          "besttime" + namee.toString(),
          time.innerHTML
        );
      } else {
        if (parseInt(bas4.innerHTML) > parseInt(time.innerHTML)) {
          bas4.innerHTML = time.innerHTML;

          window.localStorage.setItem(
            "besttime" + namee.toString(),
            time.innerHTML
          );
        }
      }

      var na = document.createElement("div");
      var na1 = document.createElement("div");
      var na2 = document.createElement("div");
      bas1.appendChild(na);
      bas1.appendChild(na1);
      bas1.appendChild(na2);

      bas1.style.display = "inline";
      na.textContent = "Your Time is";
      na.style.position = "relative";
      na.style.top = "30px";
      na1.textContent = time.innerHTML;
      na1.style.position = "relative";
      na1.style.top = "30px";
      na2.textContent = "restart";
      na.style.fontSize = "75px";
      na.style.color = "rgb(401,399,399)";
      na.style.position = "relative";
      na1.style.fontSize = "85px";
      na1.style.color = "rgb(401,399,399)";
      na1.style.position = "relative";
      na2.style.fontSize = "85px";
      na2.style.color = "green";
      na2.style.position = "relative";
      na2.style.top = "40px";

      console.log(localStorage);
      na2.addEventListener("click", myFunction);
    }
  }
}
