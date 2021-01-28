## Ejercicio 1

Creo que había cosas mejorables de ese código. Por ejemplo, usar un forEach es correcto pero se podría hacer mucho mejor con un reduce().

La definición de multimediaContent nunca se modifica así que debería ser un const y no un let.

El segundo condicional prefiero ponerlo en primer lugar, ya que creo que el código queda más claro y limpio.

En cuanto al if/else if, si solo hay dos posibilidades puede ser simplemente if/else o añadir al final un error en caso de que venga algo diferente de la base de datos, me he decantado por la primera opción pero ambas hubiesen sido correctas.

Te dejo el pseudocódigo que he creado en otro archivo llamado solution.js
