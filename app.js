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
            time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`
    
            setTimeout(showTime, 1000)
}
        
// Run
showTime()