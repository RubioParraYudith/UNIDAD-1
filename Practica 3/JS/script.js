(function(){

 })()
 function Calcular()
{
var n1 = parseInt(document.getElementById('num1').value);
var n2 = parseInt(document.getElementById('num2').value);
var Result1, Result2,Result3,Result4;
Result1 = (n1 + n2);
Result2 = (n1 - n2);
Result3 = (n1 * n2);
Result4 = (n1 / n2);
alert("La suma es: " + Result1 + "\nLa resta es: " + Result2 + "\nLa multiplicación es: " + Result3 + "\nLa division es: " + Result4);
}

