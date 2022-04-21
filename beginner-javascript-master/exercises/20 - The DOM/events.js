// console.log('it working')
// function clickme(){
//     console.log('button got clicked!!');
// }

// const vb = () => console.log('this is me');
// const cool = document.querySelector('.cool');
// const btn = document.querySelector('.btn');
//   btn.addEventListener('click', clickme)
//   cool.addEventListener('click', vb);
//   btn.removeEventListener('click', clickme);



 // listen on multiple items

 const buyButton = document.querySelectorAll('.buy')

 function buyItem(event){
   const ev = event.target;
   console.log(ev.textContent)
   console.log(typeof event.target.dataset.price);
   console.log(event.target.dataset.price);
   console.log(parseFloat (event.target.dataset.price));

   console.log(event.currentTarget);
   console.log(event.target);
   console.log(event.currentTarget === event.target); // same //<button class="buy">Buy Item 4</button>

   //change when we click on tag inside in the element  // <button class="buy">Buy Item <span>4</span></button>
   console.log(event.currentTarget === event.target);

   //stop this event from bubbling up
   event.stopPropagation();


 };
buyButton.forEach(function(buyButton){
  buyButton.addEventListener('click', buyItem);
  
});


