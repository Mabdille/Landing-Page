//DOM ELEMENTS
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    
//show Time
function showTime() {
            let today = new Date(),
                hour = today.getHours(),
                min = today.getMinutes(),
                sec = today.getSeconds();
    

            // SET AM or PM 
            const amPm = hour >= 12 ? 'PM' : 'AM'

            // 12HR Format
            hour = hour % 12 || 12
    
            // Output Time
            time.innerHTML = `${hour}<span>:</span>${addZero (min)}<span>:</span>${addZero(sec)}`
    
            setTimeout(showTime, 1000)
}

// ADD ZEROS
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '' ) + n
}

// Set Background and Greeting

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    
}
        
// Run
showTime()