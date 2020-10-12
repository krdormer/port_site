let textOne = "Howdy, I'm Kevin!";
let textArrayOne = textOne.split("");

let textTwo = "Welcome to my website!";
let textArrayTwo = textTwo.split("");

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

//////////////////////////////////////////////////////////////////////////////////////////
looperOne();

setTimeout(() => {
    looperTwo();
}, 2000);