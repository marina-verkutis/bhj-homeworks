const counter = document.getElementById("clicker__counter");
const cookieImage = document.getElementById("cookie");

let cookieSizeTracker = false; // false - small, true - big
const minSize = 200;
const maxSize = 250;

cookieImage.onclick = () => {
    let valueCounter = parseInt(counter.textContent);
    counter.textContent = valueCounter + 1;
    if (cookieSizeTracker) {
        cookieImage.width = minSize;
        cookieSizeTracker = false;
    } 
    else {
        cookieImage.width = maxSize;
        cookieSizeTracker = true;
    } 
}