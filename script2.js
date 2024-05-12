function changeBackgroundColor() {//Definimos la funcion que sera llamada por el scrip1
    const colors = ['#FF5733', '#33FF57', '#FF5733', '#3366FF', '#FFFF33', '#FF33FF', '#33FFFF', '#9933FF', '#FF9933'];
//Declaramos un array con diferentes colores que seran suados para colorear la pagina
    const randomColor = colors[Math.floor(Math.random()*colors.length)];// definimos la variable const randomColor para que almacene un color hexadecimal, esto lo obtendera del array colors, el cual obtendra un entero, este entero sera un redondeado menor obtenido con Math.floor, que a su vez obtiene el producto de un numero random(Math.random()) multiplicado por el numero de terminos del array colors (colors.length)
    document.body.style.backgroundColor = randomColor;//cada punto significa que se estara entrando dentro del primero elemento, entramos a document que seria la pagina web, luego entramos a body que es donde estan los elementos visuales como imagenes o texto, luego vamos a style, dentro de style buscamos a backgroundColor ya que este elemento sera modificado, a este le daremos el valor randomColor, que es un valor numero de color en hexadecimal.


}