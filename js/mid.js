var img; // Declare variable 'img'.
var bg; //background
var mySound;

//for loop
var rep;
var difr;
//small pic for 1st page
var p1s;
var p2s;
var p3s;
var p4s;

var elx = 460; //ellipse x
var ely = 160; //ellipse y
var d = 180; //diameter of ellipse

var smpx = 340; //small pic x
var smpy = 100; //small picy
var p1; //image santa
var p2; //image winter
var p3; //image elsa
var p4; //image snowman

var startX = 300;
var startY = 270;

var x = 0;
var y = 0;

//text box dif
var tx = 545;
var ty = 155;
//half size of image elsa, for diferences
var h = 464;

var dif; //distance for differences

var e = 35; //size of difference ellipse
var score = 0;

var conW = 1440; //concvas wight
var conH = 900; //covas hight

var game; //my data

function preload() {

    bg = loadImage("images/bg.jpeg");
    mySound1 = loadSound('sounds/bell.mp3');

    mySound2 = loadSound('sounds/wrong.wav');

    mySound3 = loadSound('sounds/MerryChristmas.mp3');

    game = loadJSON("mygame.json");
}

// create main page
function setup() {

    createCanvas(conW, conH);
    background(bg);

    p1s = loadImage(game.main[0].url);
    p2s = loadImage(game.main[1].url);
    p3s = loadImage(game.main[2].url);
    p4s = loadImage(game.main[3].url);

    p1 = loadImage(game.pics[0].url);
    p2 = loadImage(game.pics[1].url);
    p3 = loadImage(game.pics[2].url);
    p4 = loadImage(game.pics[3].url);

    setTimeout(function () {
        page1();
    }, 2000);
}



function mousePressed() {
    //opens the image

    if (dist(game.main[0].xpos, game.main[0].ypos, mouseX, mouseY) < d) {

        setTimeout(function () {
            santa();
            // loadBoard(game.main[0])


        }, 2000);
    } else


    if (dist(game.main[1].xpos, game.main[1].ypos, mouseX, mouseY) < d) {

        setTimeout(function () {
            winter();
            //loadBoard(game.main[1])
        }, 2000);
    } else

    if (dist(game.main[2].xpos, game.main[2].ypos, mouseX, mouseY) < d) {

        setTimeout(function () {
            elsa();
        }, 2000);
    } else


    if (dist(game.main[3].xpos, game.main[3].ypos, mouseX, mouseY) < d) {

        setTimeout(function () {
            snowman();
        }, 2000);
    } else {}





    //spot interaction


    //    //spot 0

    var elX = game.elsa[0].spots[0].sx;
    var elY = game.elsa[0].spots[0].sy;


    var locx = elX + startX;
    var locy = elY + startY;

    var difr = dist(locx, locy, mouseX, mouseY);


    if (difr < e) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx, locy, e, e);
        ellipse(locx+h, locy, e, e);
        difelsa();

    }

    //spot 1
    var elX1 = game.elsa[0].spots[1].sx;
    var elY1 = game.elsa[0].spots[1].sy;



    var locx1 = elX1 + startX;
    var locy1 = elY1 + startY;
    var difr1 = dist(locx1, locy1, mouseX, mouseY);

    if (difr1 < e) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx1, locy1, e, e);
        ellipse(locx1+h, locy1, e, e);
        difelsa();

    }

    //spot 2
    var elX2 = game.elsa[0].spots[2].sx;
    var elY2 = game.elsa[0].spots[2].sy;



    var locx2 = elX2 + startX;
    var locy2 = elY2 + startY;
    var difr2 = dist(locx2, locy2, mouseX, mouseY);

    if (difr2 < e) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx2, locy2, e, e);
        ellipse(locx2+h, locy2, e, e);
        difelsa();

    }


    //spot 3
    var locx3 = game.elsa[0].spots[3].sx + startX;
    var locy3 = game.elsa[0].spots[3].sy + startY;
    var difr3 = dist(locx3, locy3, mouseX, mouseY);


    if (difr3 < e) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx3, locy3, e, e);
        ellipse(locx3+h, locy3, e, e);
        difelsa();

    }
    //spot 4
    var locx4 = game.elsa[0].spots[4].sx + startX;
    var locy4 = game.elsa[0].spots[4].sy + startY;
    var difr4 = dist(locx4, locy4, mouseX, mouseY);

    if (difr4 < e) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx4, locy4, e, e);
        ellipse(locx4+h, locy4, e, e);
        difelsa();

    }

    //spot 5
    var locx5 = game.elsa[0].spots[5].sx + startX;
    var locy5 = game.elsa[0].spots[5].sy + startY;
    var difr5 = dist(locx5, locy5, mouseX, mouseY);

    if (difr5 < 15) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx5, locy5, e, e);
        ellipse(locx5+h, locy5, e, e);
        difelsa();
    }


    //spot 6


    var locx6 = game.elsa[0].spots[6].sx + startX;
    var locy6 = game.elsa[0].spots[6].sy + startY;
    var difr6 = dist(locx6, locy6, mouseX, mouseY);

    if (difr6 < 15) {

        fill(0, 0, 0, 0);
        stroke(255, 0, 0);
        ellipse(locx6, locy6, e, e);
        ellipse(locx6+h, locy6, e, e);
        difelsa();

    } else {
        mySound2.play();

    }



}


function elsa() {

    clear();
    background(bg);
    //    setTimeout(function () {
    //        page1();
    //
    //    }, 2000);


    image(p3, startX, startY);

    fill(255, 255, 255);
    rect(tx, ty, 400, 85);

    textSize(50);
    fill(255, 0, 0);
    text("You found: " + score + "/" + (game.elsa[0].spots.length) + "", tx + 35, ty + 65); // 0

}

function difelsa() {


    mySound1.play();
    fill(255, 255, 255);
    rect(tx, ty, 400, 85);
    score++;
    textSize(50);
    fill(255, 0, 0);
    text("You found: " + score + "/" + (game.elsa[0].spots.length) + "", tx + 35, ty + 65);



    if (score >= (game.elsa[0].spots.length)) {
        fill(255, 255, 255);
        rect(startX + 35, ty, 800, 85);
        mySound3.play();
        fill(255, 0, 0);
        text("Yea!!! You found all " + score + " differences", startX + 70, ty + 65);
    };




}

function page1() {

    textSize(35);
    fill(255, 0, 0);
    text("Choose one of the pictures to stast the game", 375, 300);

    noStroke();

    for (var n = 0; n < 720; n += 180) {
        fill(255, 255, 255);
        ellipse(elx + n, ely, d, d);
    }

    image(p1s, game.main[0].xpos, game.main[0].ypos);
    image(p2s, game.main[1].xpos, game.main[1].ypos);
    image(p3s, game.main[2].xpos, game.main[2].ypos);
    image(p4s, game.main[3].xpos, game.main[3].ypos);


}


function santa() {

    clear();
    background(bg);
    setTimeout(function () {
        page1();
    }, 2000);


    image(p1, startX, startY);

    textSize(50);
    fill(255, 0, 0);
    text("You found: " + score + "/10", 550, 300); // 0 need to chanche????and 10=length


    //    difelsa();
}

function winter() {

    clear();
    background(bg);
    setTimeout(function () {
        page1();
    }, 2000);


    image(p2, startX, startY);

    textSize(50);
    fill(255, 0, 0);
    text("You found: " + score + "/10", 550, 300); // 0 need to chanche????and 10=length



}

function snowman() {

    clear();
    background(bg);
    setTimeout(function () {
        page1();
    }, 2000);


    image(p4, startX, startY);

    textSize(50);

    fill(255, 0, 0);
    text("You found: " + score + "/10", 550, 350); // 0 need to chanche????and 10=length


    //    dif();
}
