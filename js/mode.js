
export function Modes({ buttonLight, buttonDark, buttonForestSound, buttonRainSound, buttonCoffeShopSound, buttonFirePlaceSound }){

    const page = document.querySelector('.page');
    const display = document.querySelector('.display');
    const displaySecond = document.querySelector('.displaySecond');
    const displayMinute = document.querySelector('.displayMinute');

    const icoButtonPlay = document.querySelector('.icoButtonPlay');
    const icoButtonStop = document.querySelector('.icoButtonStop');
    const icoButtonIncrement = document.querySelector('.icoButtonIncrement');
    const icoButtonDecrement = document.querySelector('.icoButtonDecrement');
    
    const icoForest         = document.querySelector('.ico-forest');
    const icoRain           = document.querySelector('.ico-rain');
    const icoCoffeeShop     = document.querySelector('.ico-coffeeShop');
    const icoFirePlace      = document.querySelector('.ico-firePlace');

    const florestSliderIcon  = document.querySelector('.florestSlider');
    const rainSliderIcon     = document.querySelector('.rainSlider');
    const coffeeShopSliderIcon  = document.querySelector('.coffeeShopSlider');
    const firePlaceSliderIcon   = document.querySelector('.firePlaceSlider');

    function changeMode(){
        buttonDark.classList.toggle('desable');
        buttonLight.classList.toggle('desable');
    }

    function dark(){
        page.classList.add('pageActiveDark');
        changeDarkViewMode();
        changeDarkButtonTimmer();
        changeDarkModeButtonSound();        
    }

    function light(){
        page.classList.remove('pageActiveDark');
        changeLightViewMode();
        changeLightButtonTimer();
        changeLightModeButtonSound();      
        buttonFlorestDark.classList.add('desable');  
    }

    function changeDarkViewMode(){
        display.classList.add('darkDisplay');
        displaySecond.classList.add('darkDisplay');
        displayMinute.classList.add('darkDisplay');
    }

    function changeLightViewMode(){
        display.classList.remove('darkDisplay');
        displayMinute.classList.remove('darkDisplay');
        displaySecond.classList.remove('darkDisplay');
    }

    function changeDarkButtonTimmer(){
        icoButtonPlay.classList.add('darkModeButtonTimer');
        icoButtonStop.classList.add('darkModeButtonTimer');
        icoButtonIncrement.classList.add('darkModeButtonTimer');
        icoButtonDecrement.classList.add('darkModeButtonTimer');
    }

    function changeLightButtonTimer(){
        icoButtonPlay.classList.remove('darkModeButtonTimer');
        icoButtonStop.classList.remove('darkModeButtonTimer');
        icoButtonIncrement.classList.remove('darkModeButtonTimer');
        icoButtonDecrement.classList.remove('darkModeButtonTimer');
    }

    function changeDarkModeButtonSound(){
        buttonForestSound.classList.add('darkModeBackgroundButtonSound');
        buttonRainSound.classList.add('darkModeBackgroundButtonSound');
        buttonCoffeShopSound.classList.add('darkModeBackgroundButtonSound');
        buttonFirePlaceSound.classList.add('darkModeBackgroundButtonSound');

        icoForest.classList.add('darkModeIcoButtonSound');
        icoRain.classList.add('darkModeIcoButtonSound');
        icoCoffeeShop.classList.add('darkModeIcoButtonSound');
        icoFirePlace.classList.add('darkModeIcoButtonSound');

        florestSliderIcon.classList.add('darkModeIconSlider');
        rainSliderIcon.classList.add('darkModeIconSlider');
        coffeeShopSliderIcon.classList.add('darkModeIconSlider');
        firePlaceSliderIcon.classList.add('darkModeIconSlider');
    }

    function changeLightModeButtonSound(){
        buttonForestSound.classList.remove('darkModeBackgroundButtonSound');
        buttonRainSound.classList.remove('darkModeBackgroundButtonSound');
        buttonCoffeShopSound.classList.remove('darkModeBackgroundButtonSound');
        buttonFirePlaceSound.classList.remove('darkModeBackgroundButtonSound');

        icoForest.classList.remove('darkModeIcoButtonSound');
        icoRain.classList.remove('darkModeIcoButtonSound');
        icoCoffeeShop.classList.remove('darkModeIcoButtonSound');
        icoFirePlace.classList.remove('darkModeIcoButtonSound');

        florestSliderIcon.classList.remove('darkModeIconSlider');
        rainSliderIcon.classList.remove('darkModeIconSlider');
        coffeeShopSliderIcon.classList.remove('darkModeIconSlider');
        firePlaceSliderIcon.classList.remove('darkModeIconSlider');
    }

    return { dark, light, changeMode }
}