const img = ["0.jpg", "1.gif", "2.jpg", "3.jpg", "4.gif", "5.jpg", "6.jpg"];

const bigBoxBackground = document.querySelector(".big-box");
const bgImageSelector = img[Math.floor(Math.random() * img.length)];

bigBoxBackground.style.backgroundImage = `url("css/img/${bgImageSelector}")`;