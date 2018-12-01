
var u, x, imagelist;
var isFirstTime = true;
var optionDomList;
var optioncount;

var startonce = true;
var golIndex ;
var positions = [];
window.onload = function () {
    initMatch();

}
function showpokemon(optioncount) {
    for (i = 1; i <= optioncount; i++) {
        var pikaimg = document.createElement("img");
        pikaimg.setAttribute("src", "");
        pikaimg.src = "img/pikachu.svg";
        pikaimg.className = "aimg --upper";
        pikaimg.id = "aimg" + i;

        var pokoimg = document.createElement("img");
        pokoimg.setAttribute("src", "");
        pokoimg.className = "golimg";

        var underimg = document.createElement("img");
        underimg.setAttribute("src", "");
        underimg.className = "underimg";
        underimg.src = "img/minus-symbol.svg";

        var pg = document.createElement("div");
        pg.className = "pimg";
        pg.id = "p" + i;

        var ow = document.createElement("div");
        ow.className = "option-wrapper";

        var optionwrapper = document.createElement("div");
        optionwrapper.className = "aping";
        pg.appendChild(pikaimg);
        pg.appendChild(pokoimg);
        ow.appendChild(underimg);
        ow.appendChild(pg);
        optionwrapper.appendChild(ow);
        document.body.appendChild(optionwrapper);







    }

}
function initMatch() {
     optioncount = prompt("number vared benama");
    showpokemon(optioncount);
    imagelist = document.getElementsByClassName("aimg");
    x = document.getElementsByClassName("golimg");
    u = document.getElementsByClassName("underimg");
    optionDomList = document.getElementsByClassName("option-wrapper");
    golIndex = Math.floor(Math.random()*optioncount) + 1;
    
    initResult(golIndex,optioncount);
    setPosition(optioncount);

}

function initResult(golIndex,optioncount) {
    for (let i = 0; i < optioncount; i++) {
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
    for(i=1;i<=optioncount;i++){
        document.getElementById("aimg"+i).classList.add("--upper");
    }
    
    // document.getElementById("aimg2").classList.add("--upper");
    // document.getElementById("aimg3").classList.add("--upper");
}
function gameStart() {

    if (startonce) {
        for(i=1;i<=optioncount;i++){
            document.getElementById("aimg"+i).classList.remove("--upper");
        }
       
        // document.getElementById("aimg2").classList.remove("--upper");
        // document.getElementById("aimg3").classList.remove("--upper");
        jabeja();
        startonce = false;
    }


}

function setPosition(optioncount) {
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;
   
    var newwidth = width / optioncount;

    for (i = 0; i < optioncount; i++) {
        positions[i]={};
        positions[i].x = newwidth;
        positions[i].y = (height / 2) - 50;
        optionDomList[i].style.top = positions[i].y + "px";
        optionDomList[i].style.left = positions[i].x + "px";
        newwidth=newwidth+200;

    }


    // positions[0].x = (width / 2) - 300;
    // positions[0].y = (height / 2) - 50;
    // optionDomList[0].style.top = positions[0].y + "px";
    // optionDomList[0].style.left = positions[0].x + "px";
    // positions[1].x = (width / 2) - 50;
    // positions[1].y = (height / 2) - 50;
    // optionDomList[1].style.top = positions[1].y + "px";
    // optionDomList[1].style.left = positions[1].x + "px";
    // positions[2].x = (width / 2) + 200;
    // positions[2].y = (height / 2) - 50;
    // optionDomList[2].style.top = positions[2].y + "px";
    // optionDomList[2].style.left = positions[2].x + "px";
}
function swap(index1, index2, ) {

    var distance = positions[index2].x - positions[index1].x;
    optionDomList[index1].style.top = positions[index2].y + 100 + "px";
    optionDomList[index1].style.left = positions[index2].x - 62 + "px";
    optionDomList[index2].style.top = positions[index1].y - 100 + "px";
    optionDomList[index2].style.left = positions[index1].x + 65 + "px";
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
        var poko = Math.floor(Math.random()*optioncount) + 1;
        var poko2=Math.floor(Math.random()*optioncount) + 1;
        if(poko!=poko2){
            setTimeout(function () { swap(poko, poko2) }, 500);
        }
        else{
            poko = Math.floor(Math.random()*optioncount) + 1;
            poko2=Math.floor(Math.random()*optioncount) + 1;
        }
        
        i++;

        if (i == 14) {
            clearInterval(interval);

            setTimeout(function () {
                alert("goool");

            }, 1000);
        }
    }, 600);


}




