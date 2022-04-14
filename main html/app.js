const btn2 = document.querySelector("#v2")

const btn3 = document.querySelector("#v4");

btn3.addEventListener("dblclick" , function (){
    alert ("clicked")
})


const log = document.getElementById('log');

document.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
 

// change color button 
const button = document.querySelector('#change');
const h2 = document.querySelector('h2')

button.addEventListener('click', function(){
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h2.innerText = newColor;
})

  const makeRandomColor = () => {

  const r = Math.floor(Math.random() * 255 );
  const g = Math.floor(Math.random() * 255 );
  const b = Math.floor(Math.random() * 255 );

return `rgb(${r}, ${g}, ${b})`;
}

