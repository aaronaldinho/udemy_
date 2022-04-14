const makeRandomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
return  `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelector('button');

for(let button of buttons) {
    button.addEvent.Listener('click',function (){
        console.log("cant touch this")
    })
}