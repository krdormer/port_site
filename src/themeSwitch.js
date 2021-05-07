const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');


const projectImageOne = document.getElementById('projectImageOne');
const projectImageTwo = document.getElementById('projectImageTwo');
const projectImageThree = document.getElementById('projectImageThree');

// const textBox = document.getElementById('text-box');

// Dark or Light Images 
function imageMode(color) {
    image1.src = `../src/img/problem_solving_${color}.svg`;
    image2.src = `../src/img/dev_${color}.svg`;
    image3.src = `../src/img/dog_walking_${color}.svg`;
    image4.src = `../src/img/biking_${color}.svg`;
    image5.src = `../src/img/meditation_${color}.svg`;
    image6.src = `../src/img/yoga_${color}.svg`;
    image7.src = `../src/img/escape_room_${color}.svg`;


    projectImageOne.src = `../src/img/crwn_${color}.svg`;
    projectImageTwo.src = `../src/img/pip_${color}.svg`;
    projectImageThree.src = `../src/img/joke_bot_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 / 50%)'
    // textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 /50%)'
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode'
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically 
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme 
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}