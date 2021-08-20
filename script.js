'use strict';
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for(let i=0; i<  openModal.length ; i++){
  console.log(openModal[i].textContent);
  openModal[i].addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })


}

function close(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);
document.addEventListener('keydown', function(e){
console.log(e.key)
  if(e.key === 'Escape'){
    close();
  }
})