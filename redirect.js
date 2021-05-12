const countDate = new Date('May 14, 2021 00:00:00').getTime();
const now = new Date().getTime();
const gap = countDate - now;

if (gap > 0) {
    window.location.replace("./comingsoon/comingsoon.html");
}