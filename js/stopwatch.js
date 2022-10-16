
export function RegressiveCounter({ minuteDisplay, secondDisplay }){
    let time;

    function updateDisplay(minutes, seconds){
        minuteDisplay.textContent = String(minutes).padStart(2, "0");
        secondDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function counter(){
        time = setTimeout(() => {
            let minuteCounter = Number(minuteDisplay.textContent);
            let secondCounter = Number(secondDisplay.textContent);

            if(secondCounter <= 0){
                secondCounter = 60;
                minuteCounter--;
            }
            updateDisplay(minuteCounter, String(--secondCounter));

            if(minuteCounter == 0 && secondCounter == 0){
                console.log('zerou');
                return;
            }

            counter();
        }, 1000);
    }

    function stopCounter(){
        clearTimeout(time);
        updateDisplay(0, 0);
    }

    return { counter, stopCounter }
}