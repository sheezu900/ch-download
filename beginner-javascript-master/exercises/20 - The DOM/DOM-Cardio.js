// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div)
// make an unordered list
const list =`
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = list;
// create an image
const image = document.createElement('img');
// set the source to an image
image.src = "https://source.unsplash.com/random/300x300";
// set the width to 250
image.width = '250';
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const html = `
    <div>
        <p>this is para 1</P>     
        <p class="warning">this is para 2</P>     
    </div>
`;
div.insertAdjacentHTML('afterbegin', html);
console.log(html);
// add a class to the second paragraph called warning
// remove the first paragraph
const para2 = document.querySelector('.warning');
para2.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name , age, height){
    const html2 = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    </div>
    
    `;
return html2;
}
div.insertAdjacentHTML('afterbegin', generatePlayerCard('shahzaman', 27, 173 ))
console.log(generatePlayerCard('shahzaman', 27, 173 ))
// have that function return html that looks like this:
/* <div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div> */

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
