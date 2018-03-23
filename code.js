
// function raschet(names) {
//     pole = document.calc.disp.value;
//     if (pole > 0) {
//         znach = pole.toString() + names.toString();
//         znach = Number(znach);
//         document.calc.disp.value = znach;
//     } else {
//         document.calc.disp.value = names;
//     }
// }

// function sbros() {
//     document.calc.disp.value = 0;
//     document.calc.operation.value = 0;
//     document.calc.pamyat.value = 0;
// }

// function znak(zn) {
//     rez = Number(document.getElementById('pamyat').value); 

//     if (document.calc.operation.value == 0) { 
//         document.getElementById('pamyat').value = document.calc.disp.value; 
//     } else { 
//         if (document.getElementById('operation').value == '+') { 
//             document.getElementById('pamyat').value = rez + Number(document.calc.disp.value); 
//         }
//         if (document.getElementById('operation').value == '-') {
//             document.getElementById('pamyat').value = rez - Number(document.calc.disp.value);
//         }
//         if (document.getElementById('operation').value == '*') {
//             document.getElementById('pamyat').value = rez * Number(document.calc.disp.value);
//         }
//         if (document.getElementById('operation').value == '/') {
//             document.getElementById('pamyat').value = rez / Number(document.calc.disp.value);
//         }
//     }
//     op = zn.toString(); 
//     document.getElementById('operation').value = op;
//     document.calc.disp.value = 0; 
// }

// function ravno() {
//     if (document.calc.operation.value == 0) {
//         pole = document.calc.disp.value;
//     }
//      else {
//         if (document.getElementById('operation').value == '+') {
//             pole = Number(document.getElementById('pamyat').value) + Number(document.calc.disp.value);
//         }
//         if (document.getElementById('operation').value == '-') {
//             pole = Number(document.getElementById('pamyat').value) - Number(document.calc.disp.value);
//         }
//         if (document.getElementById('operation').value == '*') {
//             pole = Number(document.getElementById('pamyat').value) * Number(document.calc.disp.value);
//         }
//         if (document.getElementById('operation').value == '/') {
//             pole = Number(document.getElementById('pamyat').value) / Number(document.calc.disp.value);
//         }
//     }
//     document.calc.disp.value = pole;
// document.getElementById("operation").value = 0;
// document.getElementById("pamyat").value = 0;
// }






// var dispVal = document.calc.disp.value;   --ВОпрос, почему не могу присвоить в переменную такое значение? 1-й инпут не принимает значение names и znach в dispVal.
var operationVal = document.calc.operation.value;
var pamyatVal = document.calc.pamyat.value;
var pamyat = document.getElementById('pamyat');
var operation = document.getElementById('operation');

function raschet(names) {
    pole = document.calc.disp.value;
    if (pole > 0) {
        znach = pole.toString() + names.toString();
        document.calc.disp.value = znach;
    } else {
        document.calc.disp.value = names;
    }
}

function sbros() {
    document.calc.disp.value = 0;
    document.calc.operation.value = 0;
    pdocument.calc.pamyat.value = 0;
}

function znak(sign) {
    rezerved = +(pamyat.value);
    if (operationVal == 0) {
        pamyat.value = document.calc.disp.value;
    } else {
        if (operation.value == "+") {
            pamyat.value = rezerved + +document.calc.disp.value;
        }
        if (operation.value == "-") {
            pamyat.value = rezerved - +document.calc.disp.value;
        }
        if (operation.value == "*") {
            pamyat.value = rezerved * +document.calc.disp.value;
        }
        if (operation.value == "/") {
            pamyat.value = rezerved / +document.calc.disp.value;
        }
    }
    op = sign.toString();
    operation.value = op;
    document.calc.disp.value = 0;
}

function ravno() {
    if (operation.value == 0) {
        pole = document.calc.disp.value;
    } else {
        if (operation.value == "+") {
            pole = +pamyat.value + +document.calc.disp.value;
        }
        if (operation.value == "-") {
            pole = +pamyat.value - +document.calc.disp.value;
        } if (operation.value == "*") {
            pole = +pamyat.value * +document.calc.disp.value;
        } if (operation.value == "/") {
            pole = +pamyat.value / +document.calc.disp.value;
        }
    }
    document.calc.disp.value = pole;
    operation.value = 0;
    pamyat.value = 0;
}