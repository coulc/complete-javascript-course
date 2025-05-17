'use strict';
/*
    Author:   coulc 
    Date:     2025/5/10
*/

const modal = document.querySelector('.modal');
const overaly = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overaly.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overaly.classList.remove('hidden');        
}


for(let i = 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overaly.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden'){
        closeModal();
    }
})


