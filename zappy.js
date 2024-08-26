const span = document.getElementById('span');
span.style.border = '2px solid black'
let colorIndex = 0;
let colors = ['red', 'green', 'blue', 'yellow'];

setInterval(() => {
  span.style.borderColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; 
}, 15 * 1000);

//this code for paper rocket rocket
const paperRocketLoop = document.querySelector('#paperRocketLoop')
function resetVideo() {
  paperRocketLoop.play();
}
setInterval(resetVideo, 3 * 1000);

// page navigation
function projectPage(){
  window.open('https://www.zappyworks.com/Projects')
}

function home() {
  window.location.href = 'https://www.zappyworks.com/about-us'
}

function aboutUs() {
  window.location.href = 'https://www.zappyworks.com/about-us'
}

function ourServices() {
  window.location.href = 'https://www.zappyworks.com/our-services'
}

function contact() {
  window.location.href = 'https://www.zappyworks.com/contact'
}

function blog() {
  window.location.href = 'https://www.zappyworks.com/blogs/'  
}