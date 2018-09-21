var counter = 0;

function moveButton() { 
//
    var buttonElem = document.getElementById("button"); //получаем данные с кнопки
    //получаем размеры экрана
    Height = window.innerHeight; 
    Width = window.innerWidth;
    butHeight = buttonElem.clientHeight;
    butWidth = buttonElem.clientWidth;
    //чтобы кнопка не ушла за экран
    availH = Height - butHeight;
    availW = Width - butWidth;
    //генерируем рандомные координаты
    var randX = Math.round(Math.random()*availH);
    var randY = Math.round(Math.random()*availW);
    //для css файла отправляем новые значения координат для кнопки
    buttonElem.style.top = randX + "px";
    buttonElem.style.left = randY + "px";

    //setTimeout(moveButton, 650);
    //var count = document.getElementById("div");
    //count.innerHTML = ++counter;
//Гугли JQuery
}

function counter() {
    document.getElementById("button1");
    document.getElementById("div").innerHTML = ++counter;
}