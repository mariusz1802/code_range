// const container = document.querySelector('.container');
// const button = document.querySelector('button');
// const p = document.querySelector('p');
// const h1 = document.querySelector('h1');


// container.addEventListener('click', (event)=> {
//   const el = event.target.tagName;
//   console.log(`kliknieto: ${el}` )
//   alert('container clicked')
// });




// button.addEventListener('click', ()=> {
//   alert('button Clicked')
// })

// p.addEventListener('click', ()=> {
//   alert('p clicked');
// })

// h1.addEventListener('click', ()=> {
//   alert('h1 clicked');
// })





const body = document.body;
const btnClose = document.querySelector('.closeBtn');
const outer = document.querySelector('.outer');
const container = document.querySelector('.container');



btnClose.addEventListener("click", (e)=> {
console.log("close")
close();
e.stopPropagation();
}, );



outer.addEventListener('click', (e)=> {
  const target = e.target.classList.contains('outer');
  if(target){
    close();
  }else{
    console.log("I nie stalo sie nic")
  }
}, )


function close() {
container.classList.add('hide')

}











