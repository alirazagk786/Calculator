var number = document.getElementsByClassName("num");
var input_val = document.getElementById("input");
var operator = document.getElementsByClassName("oprend");
var op1 = "";

//Get Numbers , C, <-
for (i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    checkNumber(this.innerHTML);
  });
}

//Get operators
for (i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    checkOperator(this.innerHTML);
  });
}

// Clear Method
function Clear() {
  input.value = 0;
  op1 = 0;
}

// Remove 1 Digit
function del() {
  op1 = op1.slice(0, -1);
  input.value = op1;
}

//   Check conditions on number
function checkNumber(val) {
  if (val == "C") {
    Clear();
  } else if (val == "←") {
    del();
  } else if (val == ".") {
    if (op1.slice(-1) != ".") {
      op1 += val;
      input.value = op1;
    }
  } else if (val == "0") {
    if (op1 != "0") {
      op1 += val;
      input.value = op1;
    }
  } else {
    if (op1 == "0") {
      op1 = "";
    }
    op1 += val;
    input.value = op1;
  }
}

// check operator
function checkOperator(val) {
  if (op1 != "") {
    if (val == "+" || val == "-" || val == "/" || val == "*" || val == "%") {
      if (
        op1.slice(-1) == "+" ||
        op1.slice(-1) == "-" ||
        op1.slice(-1) == "*" ||
        op1.slice(-1) == "/" ||
        op1.slice(-1) == "%"
      ) {
        op1 = op1.slice(0, -1);
      }
      op1 += val;
      input.value = op1;
    }
    if (val == "=") {
      try {
        if (op1.includes("%")) {
          var val1 = op1.slice(0, op1.indexOf("%"));
          var val2 = op1.slice(op1.indexOf("%") + 1, op1.length);
          op1 = (val1 * val2) / 100;
          op1 = op1.toString();
          input.value = op1;
        } else {
          op1 = input.value = eval(input.value);
          op1 = op1.toString();
        }
      } catch {
        op1 = input.value = "";
        alert("Enter a valid number");
      }
    }
  }
}
