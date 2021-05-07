const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');

const projectImageOne = document.getElementById('projectImageOne');
const projectImageTwo = document.getElementById('projectImageTwo');
const projectImageThree = document.getElementById('projectImageThree');

// const textBox = document.getElementById('text-box');

// Dark or Light Images 
function imageMode(color) {
    projectImageOne.src = `../src/img/crwn_${color}.svg`;
    projectImageTwo.src = `../src/img/joke_bot_${color}.svg`;
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