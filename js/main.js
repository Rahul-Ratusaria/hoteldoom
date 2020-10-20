var a = 1;
document.getElementById('value0').innerHTML = a;
function button01() {
  if (a>=1) {
      document.getElementById('value0').innerHTML = ++a;
  }
}
function button02() {
  if (a>=1) {
    if (a!=1) {
        document.getElementById('value0').innerHTML = --a;
    }
  }
}

var b = 1;
document.getElementById('value1').innerHTML = b;
function button11() {
  if (b>=1) {
      document.getElementById('value1').innerHTML = ++b;
  }
}
function button12() {
  if (b>=1) {
    if (b!=1) {
        document.getElementById('value1').innerHTML = --b;
    }
  }
}

var c = 1;
document.getElementById('value2').innerHTML = c;
function button21() {
  if (c>=1) {
      document.getElementById('value2').innerHTML = ++c;
  }
}
function button22() {
  if (c>=1) {
    if (c!=1) {
        document.getElementById('value2').innerHTML = --c;
    }
  }
}

var d = 1;
document.getElementById('value3').innerHTML = d;
function button31() {
  if (d>=1) {
      document.getElementById('value3').innerHTML = ++d;
  }
}
function button32() {
  if (d>=1) {
    if (d!=1) {
        document.getElementById('value3').innerHTML = --d;
    }
  }
}

var e = 1;
document.getElementById('value4').innerHTML = e;
function button41() {
  if (e>=1) {
      document.getElementById('value4').innerHTML = ++e;
  }
}
function button42() {
  if (e>=1) {
    if (e!=1) {
        document.getElementById('value4').innerHTML = --e;
    }
  }
}
