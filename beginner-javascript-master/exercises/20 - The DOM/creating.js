// const { appendChild } = require("domutils");

// console.log('it working');
// const mypar = document.createElement('p');
// mypar.textContent = 'oh hoeee yeahhhh';
// mypar.classList.add('shah');
// mypar.setAttribute('data-shah', 'attS');
// console.log(mypar);



// const img = document.createElement('img');
// img.src = 'https://source.unsplash.com/random/300x300';
// img.alt = 'cute';
// img.width = '30';
// img.height = '30';
// console.log(img);


// const mydiv =  document.createElement('div');
// mydiv.classList.add('shah');
// mydiv.textContent = 'this is my div dont touch it';
// console.log(mydiv);

// document.body.appendChild(mydiv);
// mydiv.appendChild(img);
// mydiv.appendChild(mypar);

//we need to add something to the top

// const heading = document.createElement('h1');
// heading.textContent = 'Cool things';

// mydiv.insertAdjacentElement('afterbegin', heading);


const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);
document.body.insertAdjacentElement("afterbegin",list);
console.log(list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);




