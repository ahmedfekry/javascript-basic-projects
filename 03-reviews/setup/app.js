// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

let currentId = 1;
updateReview(currentId);
document.querySelector('.prev-btn').addEventListener('click',function(){
  if(currentId == 1){
    currentId = reviews.length;
  }else{
    currentId--;
  }

  updateReview(currentId);
});

document.querySelector('.next-btn').addEventListener('click',function(){
  if(currentId == reviews.length){
    currentId = 1;
  }else{
    currentId++;
  }

  updateReview(currentId);
});

document.querySelector('.random-btn').addEventListener('click',function () { 
  currentId = generateRand();
  updateReview(currentId);
});

function updateReview(currentId){
  var ob = reviews.find(item => item.id == currentId);
  document.getElementById('person-img').setAttribute('src',ob['img']);
  document.getElementById('author').innerText = ob['name'];
  document.getElementById('job').innerText = ob['job'];
  document.getElementById('info').innerText = ob['text'];
}

function generateRand(){
  return Math.ceil(Math.random()*4);
}