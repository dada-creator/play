const countDate = new Date('May 15, 2021 19:00:00').getTime();
const now = new Date().getTime();
const gap = countDate - now;

if (gap > 0) {
    window.location.replace("./comingsoon/comingsoon.html");
}