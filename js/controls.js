
export function Controls({ minuteDisplay }){
    
    let newMinutes = 0;
    let increment = 5;
    
    function moreTime(){
        newMinutes = newMinutes + increment;  
        minuteDisplay.textContent = String(newMinutes).padStart(2, "0");
        console.log(newMinutes);
    }

    function lessTime(){
        newMinutes = newMinutes - increment;
        minuteDisplay.textContent = String(newMinutes).padStart(2, "0");
        console.log(newMinutes);
    }

    return { moreTime, lessTime };
}
