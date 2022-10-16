import { AlertError } from './error.js';
import { Sound } from './songsButtons.js';
import { Controls } from './controls.js';
import { RegressiveCounter } from './stopwatch.js';
import { Modes } from './mode.js';

const minuteDisplay = document.querySelector('.minuto');
const secondDisplay = document.querySelector('.segundo');
const buttonPlay = document.querySelector('.bt-play');
const buttonStop = document.querySelector('.bt-stop');
const buttonIncrement = document.querySelector('.bt-increment');
const buttondecrement = document.querySelector('.bt-decrement');
const buttonForestSound = document.querySelector('.bt-florest');
const buttonRainSound = document.querySelector('.bt-rain');
const buttonCoffeShopSound = document.querySelector('.bt-coffeeShop');
const buttonFirePlaceSound = document.querySelector('.bt-FirePlace');

const buttonLight = document.querySelector('.light');
const buttonDark = document.querySelector('.dark');


buttonPlay.addEventListener('click', startCounter);
buttonStop.addEventListener('click', stopCounter);
buttonIncrement.addEventListener('click', addTime);
buttondecrement.addEventListener('click', removeTime);
buttonForestSound.addEventListener('click', forestSound);
buttonRainSound.addEventListener('click', rainSound);
buttonCoffeShopSound.addEventListener('click', coffeShopSound);
buttonFirePlaceSound.addEventListener('click', fireplaceSound);

buttonLight.addEventListener('click', lightMode);
buttonDark.addEventListener('click', darkMode);


const controls = Controls({ minuteDisplay });
const counter = RegressiveCounter({ minuteDisplay, secondDisplay });
const buttonSound = Sound({ buttonForestSound, buttonRainSound, buttonCoffeShopSound, buttonFirePlaceSound });
const modes = Modes({ buttonLight, buttonDark, buttonForestSound, buttonRainSound, buttonCoffeShopSound, buttonFirePlaceSound });


/* = = = =  bottuns Counter = = = = */

function startCounter(){
    if (minuteDisplay.textContent == 0) {
        AlertError.activeAlert();
    } else {
        console.log('Play');
        counter.counter();
    }
}

function stopCounter(){
    console.log('Stop');
    counter.stopCounter();
}

function addTime(){
    controls.moreTime();
    AlertError.desableAlert();
}

function removeTime(){
    if(minuteDisplay.textContent == 0){
        AlertError.activeAlert();
    }else{
        controls.lessTime();
    }    
}

/* = = = =  Buttons Sound  = = = = */

function forestSound(){
    buttonSound.activeSoundForest();
    buttonSound.activeButtonForest();

}

function rainSound(){
    buttonSound.activeSoundRain();
    buttonSound.activeButtonRain();
}

function coffeShopSound(){
    buttonSound.activeSoundCoffeeShop();
    buttonSound.activeButtonCoffeeShop();
}

function fireplaceSound(){
    buttonSound.activeSoundFirePlace();
    buttonSound.activeButtonFire();
}


function lightMode(){
    console.log('light');
    modes.changeMode();
    modes.dark();
}

function darkMode(){
    console.log('dark');
    modes.changeMode();
    modes.light();

}