let counter = 0;

document.querySelector('.increase').addEventListener('click',function(){
    counter++;
    document.getElementById('value').innerText = counter;
    if(counter > 0){
        document.getElementById('value').style.color = 'green';
    }
});

document.querySelector('.decrease').addEventListener('click',function(){
    counter--;
    document.getElementById('value').innerText = counter;
    if(counter < 0){
        document.getElementById('value').style.color = 'red';
    }
});

document.querySelector('.reset').addEventListener('click',function(){
    counter = 0;
    document.getElementById('value').innerText = counter;
    document.getElementById('value').style.color = 'black';
});
