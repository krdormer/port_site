let lineOneText = "Howdy, I'm Kevin!";
let textArrayOne = lineOneText.split("");

let textTwo = "I am a Web Developer from Austin, Texas.";
let textArrayTwo = textTwo.split("");

let textThree = "This is my portfolio, please take a look around!";
let textArrayThree = textThree.split("");

//////////////////////////////////////////////////////////////////////////////////////////

function looperOne() {
    if (textArrayOne.length > 0) {
        document.getElementById('type_text').innerHTML += textArrayOne.shift();
    } else {
        clearTimeout(looperOne);
        return false;
    }
    timer = setTimeout('looperOne()', 70);
}

function looperTwo() {
    if (textArrayTwo.length > 0) {
        document.getElementById('type_text_two').innerHTML += textArrayTwo.shift();
    } else {
        clearTimeout(looperTwo);
        return false;
    }
    timer = setTimeout('looperTwo()', 70);
}

function looperThree() {
    if (textArrayThree.length > 0) {
        document.getElementById('type_text_three').innerHTML += textArrayThree.shift();
    } else {
        clearTimeout(looperThree);
        return false;
    }
    timer = setTimeout('looperThree()', 100);
}

// //////////////////////////////////////////////////////////////////////////////////////////
looperOne();

setTimeout(() => {
    looperTwo();
}, 2000);

setTimeout(() => {
    looperThree();
}, 5500)