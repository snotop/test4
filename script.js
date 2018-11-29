var person = prompt("number vared benama");
var u, x, imagelist;
var isFirstTime = true;
var optionDomList;

var startonce = true;
var golIndex = Math.floor(Math.random() * (4 - 1)) + 1;
var positions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
]
window.onload = function () {
    showpokemon();
    initMatch();
}
function showpokemon() {
    for (i = 0; i < person; i++) {
        var div1 = document.createElement("div");
        div1.className = "aping";
        var div2 = document.createElement("div");
        div2.className = "option-wrapper";
        document.getElementsByTagName('body')[0].appendChild("div1");
        div1.appendChild("div2");
        var div3 = document.createElement("div");
        div3.className = "pimg";
        div3.id = "p[i]";
        div2.appendChild("div3");
        var pokoimg = document.createElement("img");
        pokoimg.setAttribute("src");
        pokoimg.className = "golimg";
        div3.appendChild("pokoimg");
        var pika = document.createElement("img");
        pika.setAttribute("src");
        pika.src = "img/pikachu.svg";
        pika.className = "aimg --upper";
        pika.id = "aimg[i]";
        div3.appendChild("pika");
        var minus = document.createElement("img");
        minus.setAttribute("src");
        minus.className = "underimg";
        minus.src = "img/minus-symbol.svg";
        div2.appendChild("minus");
    }
}
function initMatch() {
    imagelist = document.getElementsByClassName("aimg");
    x = document.getElementsByClassName("golimg");
    u = document.getElementsByClassName("underimg");
    optionDomList = document.getElementsByClassName("option-wrapper");
    initResult();
    setPosition();
}

function initResult() {
    for (let i = 0; i < 3; i++) {
        if (golIndex - 1 == i) {
            x[golIndex - 1].src = "img/pokeball.svg";
        }
        else {
            x[i].src = "img/fist.svg";
        }
        imagelist[i].addEventListener("click", function (event) {
            if (faal, isFirstTime) {
                jabeja(i);
                faal = true;
                showResult(i);
                isFirstTime = false;
            }



        })
    }
}

function showResult(clickedItemIndex) {

    switch (clickedItemIndex) {
        case 0:
            u[0].style.display = "block";
            // u[0].classList.add("show");
            break;
        case 1:
            u[1].style.display = "block";
            // u[1].classList.add("show");
            break;
        case 2:
            u[2].style.display = "block";
        // u[2].classList.add("show");
    }
    document.getElementById("aimg1").classList.add("--upper");
    document.getElementById("aimg2").classList.add("--upper");
    document.getElementById("aimg3").classList.add("--upper");
}
function gameStart() {

    if (startonce) {
        document.getElementById("aimg1").classList.remove("--upper");
        document.getElementById("aimg2").classList.remove("--upper");
        document.getElementById("aimg3").classList.remove("--upper");
        jabeja();
        startonce = false;
    }


}
function swap() {
    var img1 = document.getElementById("p1");
    var img2 = document.getElementById("p2");
}
function setPosition() {
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;
    positions[0].x = (width / 2) - 300;
    positions[0].y = (height / 2) - 50;
    optionDomList[0].style.top = positions[0].y + "px";
    optionDomList[0].style.left = positions[0].x + "px";
    positions[1].x = (width / 2) - 50;
    positions[1].y = (height / 2) - 50;
    optionDomList[1].style.top = positions[1].y + "px";
    optionDomList[1].style.left = positions[1].x + "px";
    positions[2].x = (width / 2) + 200;
    positions[2].y = (height / 2) - 50;
    optionDomList[2].style.top = positions[2].y + "px";
    optionDomList[2].style.left = positions[2].x + "px";
}
function swap(index1, index2, ) {

    var distance = positions[index2].x - positions[index1].x;
    optionDomList[index1].style.top = positions[index2].y + 100 + "px";
    optionDomList[index1].style.left = positions[index2].x - 125 + "px";
    optionDomList[index2].style.top = positions[index1].y - 100 + "px";
    optionDomList[index2].style.left = positions[index1].x + 130 + "px";
    setTimeout(function () {

        optionDomList[index1].style.top = positions[index2].y + "px";
        optionDomList[index1].style.left = positions[index2].x + "px";
        optionDomList[index2].style.top = positions[index1].y + "px";
        optionDomList[index2].style.left = positions[index1].x + "px";
        setTimeout(function () {
            var item1 = optionDomList[index1].cloneNode(true);
            var item2 = optionDomList[index2].cloneNode(true);
            optionDomList[index1].parentNode.replaceChild(item2, optionDomList[index1]);
            optionDomList[index2].parentNode.replaceChild(item1, optionDomList[index2]);

        }, 250);
    }, 250);


}
function jabeja() {
    var i = 0;
    var interval = setInterval(function () {
        console.log(i);
        var poko = Math.floor(Math.random() * (4 - 1)) + 1;
        switch (poko) {
            case 0:
                setTimeout(function () { swap(1, 2) }, 500);
                break;
            case 1:
                setTimeout(function () { swap(0, 2) }, 500);
                break;
            case 2:
                setTimeout(function () { swap(0, 1) }, 500);
        }

        i++;

        if (i == 5) {
            clearInterval(interval);

            setTimeout(function () {
                alert("goool");

            }, 1000);
        }
    }, 600);


}




