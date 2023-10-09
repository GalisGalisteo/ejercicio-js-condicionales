/*

Lee la información sobre el operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

"Esta condición se cumple"

Porque la segunda condición no se cumple, ya que -1 no es mayor a 0

*/

if (4 > 3 && 6 > 5) {
  console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
  console.log("Esta condición también se cumple?");
}
