console.log('its working')

const mydiv = document.querySelector('.item');
const src = `https://source.unsplash.com/random/300x300`;
const desc =` pop`;

const item= `
<div>
    <h1>cute ${desc}</h1>
    <p>its working</p>
    <img src="${src}" alt="${desc}"/>
</div>
`;

mydiv.innerHTML     =       item;
console.log(typeof mydiv);