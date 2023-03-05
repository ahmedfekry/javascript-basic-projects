const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector('#btn').addEventListener('click',function () { 
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*hex.length)];
    }

    document.body.style.backgroundColor = color;
    document.getElementsByClassName('color')[0].textContent = color;
});