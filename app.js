// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  // select items
  
  const prev = document.querySelector(".prev-btn");
  console.log(prev);
  const next = document.querySelector(".next-btn");
  console.log(next);
  const random = document.querySelector(".random-btn");
  console.log(random);
  
  const img = document.getElementById("person-img");
  console.log(img);
  const author = document.getElementById("author");
  console.log(author);
  const job = document.getElementById("job");
  console.log(job);
  const info = document.getElementById("info");
  console.log(info);
  
  let currentItem = 0;
  
  function getRandom (limit) {
    return Math.floor(Math.random() * limit);
  }
  
  window.addEventListener("DOMContentLoaded", function(){
    console.log("shake and bake");
    const item = reviews[currentItem];
    img.src = item.img;
    
    
    });
  
  next.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    let item = reviews[currentItem];
    img.src = item.img;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.text;
    });
  
    prev.addEventListener("click", function(){
      currentItem--;
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
      let item = reviews[currentItem];
      img.src = item.img;
      author.innerHTML = item.name;
      job.innerHTML = item.job;
      info.innerHTML = item.text;
      });
  
    
     random.addEventListener("click", function(){
       let randy = getRandom(reviews.length);
       console.log(randy);
       let item = reviews[randy];
       img.src = item.img;
       author.innerHTML = item.name;
       job.innerHTML = item.job;
       info.innerHTML = item.text;
        });
    
      