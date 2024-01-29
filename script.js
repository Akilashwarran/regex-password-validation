var pswd = document.getElementById("pword");
var lcase = document.getElementById("lcase");
var ucase = document.getElementById("ucase");
var digits = document.getElementById("digits");
var charlen = document.getElementById("charlen");

var lc = /[a-z]/g;
var uc = /[A-Z]/g;
var digit = /[0-9]/g;

function show() {
    document.getElementById("myTooltip").style.display = "block";
}

function hide() {
    document.getElementById("myTooltip").style.display = "none";
}

function validatePassword() {
    var len = pswd.value.length;

    if (pswd.value.match(lc)) {
        lcase.classList.remove('invalid');  
        lcase.classList.add('valid');
    } else {
        lcase.classList.remove('valid');
        lcase.classList.add('invalid');
    }

    if (pswd.value.match(uc)) {
        ucase.classList.remove('invalid');
        ucase.classList.add('valid');
    } else {
        ucase.classList.remove('valid');
        ucase.classList.add('invalid');
    }

    if (pswd.value.match(digit)) {
        digits.classList.remove('invalid');
        digits.classList.add('valid');
    } else {
        digits.classList.remove('valid');
        digits.classList.add('invalid');
    }

    if (len >= 8) {
        charlen.classList.remove('invalid');
        charlen.classList.add('valid');
    } else {
        charlen.classList.remove('valid');
        charlen.classList.add('invalid');
    }
}
