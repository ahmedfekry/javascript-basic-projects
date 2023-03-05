const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let spanColor = document.querySelector('.color');

const btn = document.getElementById('btn').onclick = function(params) {
    
    const randomElement = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomElement;
    spanColor.textContent = randomElement;
}
