//main div
const mainDivEle = document.createElement("div");
mainDivEle.id = "main_div";

mainDivEle.className = "container-md ";

document.body.appendChild(mainDivEle);

//H1 tag
const h1Ele = document.createElement("h1");
h1Ele.id = "title";
h1Ele.innerText = "Calculator";
h1Ele.className = "bg-primary ";
h1Ele.style.textAlign = "center";
h1Ele.style.fontSize = "32px";
mainDivEle.appendChild(h1Ele);

//P tag
const pEle = document.createElement("p");
pEle.id = "description";
pEle.innerText =
  "Designing a web application calculator through DOM Manipulation";
pEle.className = "bg-light ";
pEle.style.textAlign = "center";
pEle.style.fontSize = "32px";
mainDivEle.appendChild(pEle);

//calculator Div
//div
const calcDiv = document.createElement("div");
calcDiv.id = "calculator-div";
calcDiv.className = "container-md bg-light table-responsive ";
// calcDiv.style.height = "500px";
calcDiv.style.width = "500px";
mainDivEle.appendChild(calcDiv);
//display input
const inputEle = document.createElement("input");
inputEle.setAttribute("type", "text");
inputEle.id = "result";
inputEle.value = "";
inputEle.style.height = "80px";
inputEle.style.width = "90%vh";
inputEle.className = "container-sm";
inputEle.style.border = "5px solid black";
inputEle.style.color = "black";
inputEle.style.fontSize = "25px";
calcDiv.append(inputEle);

//Table
const tableEle = document.createElement("table");
tableEle.className = "table";
calcDiv.appendChild(tableEle);

//tr for first line===>c Back  .  *
const tr1Ele = document.createElement("tr");
//tr1Ele.style.height="100px";
tableEle.appendChild(tr1Ele);

//td for clear
const tdclrEle = document.createElement("td");
const clearEle = document.createElement("button");
clearEle.id = "clear";
clearEle.innerText = "CLEAR";
// clearEle.style.width="30%";
// clearEle.style.margin="5px";
clearEle.style.color = "red";

tr1Ele.appendChild(tdclrEle);
tdclrEle.appendChild(clearEle);
//td for Back
const tdbackEle = document.createElement("td");
const backEle = document.createElement("button");
backEle.id = "backspace";
backEle.innerText = "B";
// backEle.style.width='20%';
// backEle.style.margin="5px";
tr1Ele.appendChild(tdbackEle);
tdbackEle.appendChild(backEle);

// td for dot
const tddotEle = document.createElement("td");
const dotEle = document.createElement("button");
dotEle.id = "decimal";
dotEle.innerText = ".";

tr1Ele.appendChild(tddotEle);
tddotEle.appendChild(dotEle);

// td for *
const tdmultiplyEle = document.createElement("td");
const multiplicationEle = document.createElement("button");
multiplicationEle.id = "mulitiply";
multiplicationEle.innerText = "*";
multiplicationEle.style.backgroundColor = "#f69906";
tr1Ele.appendChild(tdmultiplyEle);
tdmultiplyEle.appendChild(multiplicationEle);

//tr for second line===>7  8   9  /
const tr2Ele = document.createElement("tr");
tableEle.appendChild(tr2Ele);

//td for 7
const td7btnEle = document.createElement("td");
const btn7Ele = document.createElement("button");
btn7Ele.id = "7";
btn7Ele.innerText = "7";
tr2Ele.appendChild(td7btnEle);
td7btnEle.appendChild(btn7Ele);

//td for 8
const td8btnEle = document.createElement("td");
const btn8Ele = document.createElement("button");
btn8Ele.id = "8";
btn8Ele.innerText = "8";
tr2Ele.appendChild(td8btnEle);
td8btnEle.appendChild(btn8Ele);

//td for 8
const td9btnEle = document.createElement("td");
const btn9Ele = document.createElement("button");
btn9Ele.id = "9";
btn9Ele.innerText = "9";
tr2Ele.appendChild(td9btnEle);
td9btnEle.appendChild(btn9Ele);

//td for /
const tddivbtnEle = document.createElement("td");
const divideEle = document.createElement("button");
divideEle.id = "divide";
divideEle.style.backgroundColor = "#f69906";
divideEle.innerText = "/";
tr2Ele.appendChild(tddivbtnEle);
tddivbtnEle.appendChild(divideEle);

//tr for second line===>4   5   6  -
const tr3Ele = document.createElement("tr");
tableEle.appendChild(tr3Ele);
//td for 4
const td4btnEle = document.createElement("td");
const btn4Ele = document.createElement("button");
btn4Ele.id = "4";
btn4Ele.innerText = "4";
tr3Ele.appendChild(td4btnEle);
td4btnEle.appendChild(btn4Ele);

//td for 5
const td5btnEle = document.createElement("td");
const btn5Ele = document.createElement("button");
btn5Ele.id = "5";
btn5Ele.innerText = "5";
tr3Ele.appendChild(td5btnEle);
td5btnEle.appendChild(btn5Ele);

//td for 6
const td6btnEle = document.createElement("td");
const btn6Ele = document.createElement("button");
btn6Ele.id = "6";
btn6Ele.innerText = "6";
tr3Ele.appendChild(td6btnEle);
td6btnEle.appendChild(btn6Ele);

//td for sub
const tdsubbtnEle = document.createElement("td");
const subtractEle = document.createElement("button");
subtractEle.id = "subtract";
subtractEle.innerText = "-";
subtractEle.style.backgroundColor = "#f69906";
tr3Ele.appendChild(tdsubbtnEle);
tdsubbtnEle.appendChild(subtractEle);

//tr for second line===>1   2   3  +
const tr4Ele = document.createElement("tr");
tableEle.appendChild(tr4Ele);

//td for 1
const td1btnEle = document.createElement("td");
const btn1Ele = document.createElement("button");
btn1Ele.id = "1";
btn1Ele.innerText = "1";
tr4Ele.appendChild(td1btnEle);
td1btnEle.appendChild(btn1Ele);

//td for 2
const td2btnEle = document.createElement("td");
const btn2Ele = document.createElement("button");
btn2Ele.id = "2";
btn2Ele.innerText = "2";
tr4Ele.appendChild(td2btnEle);
td2btnEle.appendChild(btn2Ele);

//td for 3
const td3btnEle = document.createElement("td");
const btn3Ele = document.createElement("button");
btn3Ele.id = "3";
btn3Ele.innerText = "3";
tr4Ele.appendChild(td3btnEle);
td3btnEle.appendChild(btn3Ele);

//td for +
const tdaddbtnEle = document.createElement("td");
const btnaddEle = document.createElement("button");
btnaddEle.id = "add";
btnaddEle.innerText = "+";
btnaddEle.style.backgroundColor = "#f69906";
tr4Ele.appendChild(tdaddbtnEle);
tdaddbtnEle.appendChild(btnaddEle);

//tr for second line===>0   00   =
const tr5Ele = document.createElement("tr");
tableEle.appendChild(tr5Ele);

//td for 0
const td0btnEle = document.createElement("td");
const btn0Ele = document.createElement("button");
btn0Ele.id = "0";
btn0Ele.innerText = "0";
tr5Ele.appendChild(td0btnEle);
td0btnEle.appendChild(btn0Ele);

//td for 00
const td00btnEle = document.createElement("td");
const btn00Ele = document.createElement("button");
btn00Ele.id = "00";
btn00Ele.innerText = "00";
tr5Ele.appendChild(td00btnEle);
td00btnEle.appendChild(btn00Ele);

const tdequalbtnEle = document.createElement("td");
tdequalbtnEle.setAttribute("colspan", "2");
const equalEle = document.createElement("button");
equalEle.id = "equal";
equalEle.style.width = "214.75px";
// equalEle.style.height='100px';
equalEle.innerText = "=";
equalEle.style.backgroundColor = "#f69906";
tr5Ele.appendChild(tdequalbtnEle);
tdequalbtnEle.appendChild(equalEle);
//add eventlis for keydown
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    console.log(event);

    // Alert the key name and key code on keydown
    if (
      name == 1 ||
      name == 2 ||
      name == 3 ||
      name == 4 ||
      name == 5 ||
      name == 6 ||
      name == 7 ||
      name == 8 ||
      name == 9 ||
      name == 0
    ) {
      inputEle.value += name;
    } else {
      alert("ONLY NUMBERS ARE ALLOWED");
    }
  },
  false
);

let display = document.getElementById("result");
const buttons = Array.from(document.getElementsByTagName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "CLEAR":
        display.value = "";
        break;

      case "B":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      case "=":
        display.value = eval(display.value);
        break;

      default:
        display.value += e.target.innerText;
    }
  });
});
