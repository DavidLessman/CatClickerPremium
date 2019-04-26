// create global variables
let scoreDisplay = document.getElementById("score");
let scoreBoard = document.getElementById("scoreBoard");
let Board = document.getElementById("PlayField");
let catMenu = document.getElementById('catMenu');

// catList (array) is definately part of the model
var model = {
    currentCat: null,
    siteScore: 0,
    catList: [
        {
            name: "Phillip",
            img: "img/catRed.jpg",
            score: 0
        },
        {
            name: "Kelly",
            img: "img/Curious-cat.jpg",
            score: 0
        },
        {
            name: "Charles",
            img: "img/GrayCatBlueEyes.jpg",
            score: 0
        },
        {
            name: "Fenando",
            img: "img/leopard.jpg",
            score: 0
        },
        {
            name: "Jose",
            img: "img/Lion.jpg",
            score: 0
        },
        {
            name: "Bryan",
            img: "img/PlayfulCat.jpg",
            score: 0
        },
        {
            name: "Wilma",
            img: "img/tiger.jpg",
            score: 0
        },
    ]
}

function RenderCat(i) {
    // next line is view? maybe Octopus
    Board.innerHTML = '';

    var para = document.createElement("div");
    para.classList.add("cat");
    para.innerHTML = `<h3>Name: <span id="name">${model.catList[i].name}</span>  Clicks: <span id ="clicks">${catList[i].score}</span > <h3><img class="catPic" id="catPic" src="${catList[i].img}">`;
    Board.appendChild(para);
    var clickCounter = document.getElementById('clicks');
    var pictureOfThisCat = document.getElementById('catPic');

    pictureOfThisCat.addEventListener('click', (function (evt) {
        return function () {
            console.log(`You clicked on ${modelcatList[i].name}`);
            // next few lines are definately octopus, probably this entire function.
            model.catList[i].score += 1;
            model.siteScore = 0;
            for (var s = 0; s < model.catList.length; s++) {
                model.siteScore += model.catList[s].score;
            };
            // well, these next 3 have got to be octopus getting info from Model and passing to View
            scoreDisplay.innerText = model.siteScore;
            clickCounter.innerText = model.catList[i].score;
            menuScoresArray[i].innerText = model.catList[i].score;
        };
    })(i));

}

function renderMenu(i) {
    var para = document.createElement("li");
    para.classList.add("menuItem");
    para.innerHTML = `<span>${catList[i].name}</span>  Clicks: <span name ="menuClick">${catList[i].score}</span>`;
    catMenu.appendChild(para);
    
    para.addEventListener('click', (function (evt) {
        return function () {
            console.log(`You clicked on ${catList[i].name}`);
            RenderCat(i);
        }        
        //clickCounter.innerText = catList[i].score;
    }) (i));
}



// Octopus
for (var i = 0; i < catList.length; i++) {
    renderMenu(i);
}
var menuScoresArray = document.getElementsByName('menuClick');

RenderCat(4);

function resetGame() {
    siteScore = 0;
    for (var i = 0; i < catList.length; i++) {
        catList[i].score = 0;
    };
}

resetGame();
