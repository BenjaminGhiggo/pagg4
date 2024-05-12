document.addEventListener("DOMContentLoaded", function(){ //Configuramos el scrip con DOM para que este se ejecute cuando los elementos del html ya se han creado y esten listos para ser manipulados por el agente script, esto quiere decir que scrip1 se ejecutara despues de index.html
    const button = document.getElementById("colorButton"); // Aqui definimos la constante button, const button manipulara a Id="colorButton", para posteriormente asignarle un evento const button tal como la capacidad de cambiar el color de la pagina.

    button.addEventListener("click", function(){// Esta linea de codigo button.addEvent.. se encarga de añadirle un evento a button cuando sobre el halla un click, y ese evento es ejecutar el codigo dentro de este mismo metodo
         changeBackgroundColor(); // Llamanos a la funcion ChageBackgroundColor para que le cambie el color a la pagina, este funcion se encunetra en el otro script, practicamente el script2 es un agente asistente de script1, es una funcion.
    });
});