function moveButton() { 

    buttonElem = document.getElementById("button"); //получаем данные с кнопки
    //получаем размеры экрана
    Height = window.innerHeight; 
    Width = window.innerWidth;
    //генерируем рандомные координаты
    var randX = Math.round(Math.random()*Height);
    var randY = Math.round(Math.random()*Width);
    //для css файла отправляем новые значения координат для кнопки
    buttonElem.style.top = randX + "px";
    buttonElem.style.left = randY + "px";

}