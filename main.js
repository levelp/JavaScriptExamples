"use strict"; // Включаем поддержку нового стандарта JavaScript

// Циклы
for (var i = 2; i < 6; i++) {
    document.write(i + "<sup>2</sup> = " + Math.pow(i, 2) + "<br>");
}

// Оператор switch
// Номер ветки в метро
var x = 1;
var name;
switch (x) {
    case 1:
        name = "Кировско-Выборгская";
        break;
    case 2:
        name = "Московско-Петроградская";
        break;
    default:
        name = "Неизвестная ветка";
}

// Фукнции в JavaScript
function showHello() {
    document.write('<h1>Привет всем присутствующим!</h1>');
}

var showHello2 = function () {
    document.write('<h1>Привет всем присутствующим!</h1>');
};


function linEq(a, b) {
    var result = "<br>Решаем уравнение: " + a + "*x + " + b + " = 0<br>";
    var x = -b / a;
    result += "x = -(" + b + ") / " + a + " = " + x + "<br><hr>";
    return result;
}

function solveLinEq() {
    var aObj = document.getElementById("a");
    var bObj = document.getElementById("b");
    var a = parseFloat(aObj.value);
    var b = parseFloat(bObj.value);

    document.getElementById("result").innerHTML = linEq(a, b);
}


// Значение не указано undefined
function showMessage(from, text) {
    text = text || 'текст не передан';
}


/*
 linEq(2, 1);
 linEq(5, 6);
 linEq(2.5, 32);
 linEq(20, 1);
 linEq(0.221, 1.113);
 linEq(324, 132);
 */
document.write("Название ветки: " + name);

showHello();