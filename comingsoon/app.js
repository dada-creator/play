import { startconfeti } from './confetti.js';

const countdown = () => {
    const countDate = new Date('May 14, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    if (gap > 0) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        
        document.querySelector('.day').innerText = textDay;
        document.querySelector('.hour').innerText = textHour;
        document.querySelector('.minute').innerText = textMinute;
        document.querySelector('.second').innerText = textSecond;
    } else {
        document.querySelector('.day').innerText = "0";
        document.querySelector('.hour').innerText = "0";
        document.querySelector('.minute').innerText = "0";
        document.querySelector('.second').innerText = "0";
        
        startconfeti()
        console.log("confeti started")
        clearInterval(refreshIntervalId);
        //window.location.reload(true)
        
        //document.write('<canvas id="canvas" style="position: absolute; bottom: 0; left: 0; width: 100%;"></canvas>');
    }
}
//countdown()
var refreshIntervalId = setInterval(countdown, 1000);
