// create global variables

// catList (array), currentCat and siteScore are part of the model, they store data.
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

// Octopus
var Octopus = {
    init: function () {
        model.currentCat = model.catList[0];

        catMenuView.init();
        catView.init();
    },

    getCats: function () {
        return model.catList;
    },

    // current Cat get/set
    getCurrentCat: function () {
        return model.currentCat;
    },

    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    incrementCounter: function () {
        model.currentCat.score++;
        catView.render();
        model.siteScore = 0;
        for (var s = 0; s < model.catList.length; s++) {
            model.siteScore += model.catList[s].score;
        };
        ScoreBoardView.render();
    }
}

 //View seperated into 3 views: the cat itself, view for the menu, 
 //and the scoreBoard(total score for all the cats).

// cat view

var catView = {

    init: function () {
        this.catName = document.getElementById('cat-name');
        this.clickCounter = document.getElementById('cat-clicks');
        this.pictureOfThisCat = document.getElementById("cat-Pic");

        this.pictureOfThisCat.addEventListener('click', function () {
            Octopus.incrementCounter();
            console.log("click!");
        });

        this.render();
    },

    render: function () {
        var fluffy = Octopus.getCurrentCat();
        this.catName.innerText = fluffy.name;
        this.clickCounter.innerText = fluffy.score;
        this.pictureOfThisCat.src = fluffy.img;

    }
}

// catMenu view

var catMenuView = {
    init: function () {
        this.catMenuElement = document.getElementById('catMenu');

        this.render();
    },

    render: function () {
        var cat, elem, i;
        var cats = Octopus.getCats();

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            var para = document.createElement("li");
            para.classList.add("menuItem");
            para.innerHTML = `<span>${cat.name}</span>`;


            para.addEventListener('click', (function (evt) {
                return function () {
                    Octopus.setCurrentCat(evt);
                    catView.render();
                }

            })(cat));

            this.catMenuElement.appendChild(para);
        }


    },
}

var ScoreBoardView = {
    scoreDisplay: document.getElementById("score"),

    render: function () {
        this.scoreDisplay.innerText = model.siteScore;
    },
}


function resetGame() {
    siteScore = 0;
}

Octopus.init();
