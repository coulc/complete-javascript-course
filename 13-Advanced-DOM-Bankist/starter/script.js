'use strict';

/*
    Author:   coulc 
    Date:     2025/5/31

    study:
        DOM  select  create remove, prepend()  append() cloneNode() before() after() remove()
        Attributes,Data Attributes,Classes
        getBoundingClientRect()
        
*/


///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    // 防止回到顶部
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click',(e) => {
    const s1coords = section1.getBoundingClientRect();
    section1.scrollIntoView({behavior:'smooth'});
})

// document.querySelectorAll('.nav__link').forEach(
//     (e) => {
//         e.addEventListener('click',function(e){
//             e.preventDefault();
//             const id = this.getAttribute('href');
//             console.log(id);
//             document.querySelector(id).scrollIntoView({behavior:'smooth'});
//         })
//     }
// );

document.querySelector('.nav__links').addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});



//////////////////////////////////////
// LECTURE
/*
// Selecting elements
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelector = document.querySelectorAll('.section');
console.log(allSelector);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


// Creating  and inserting elements
const message = document.createElement('div');
message.classList.add('cookie--message');
// message.textContent = `hello world,this is text button! <button class = "btn btn--close-cookie">Got it!</button>`;
message.innerHTML = `hello world,this is text button! <button class = "btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie')
    .addEventListener('click', () => {
    // message.remove();
    message.parentElement.removeChild(message);
});


// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary','orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company','bankist');
console.log(logo.getAttribute('company'));

const src = logo.getAttribute('src');
console.log(src);

// const link = document.querySelector('.twitter-link');
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));


// Data Attributes
console.log(logo.dataset.versionNumber);


// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');


// Don't use 
// logo.className = 'Jonas';

*/  

/*

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',(e) => {
    // 获取目标元素的位置信息
    const s1coords = section1.getBoundingClientRect(); // 返回一个包含元素的大小及其相对于视口的位置信息的对象
    console.log(s1coords);

    // 获取触发事件的元素的位置信息
    console.log(e.target.getBoundingClientRect());
    // 获取当前页面的水平和垂直滚动偏移量
    console.log('Current scroll(X/Y) ',window.pageXOffset,window.pageYOffset);
    console.log(
        'height/width viewport',
        //获取视口的高度和宽度 
        document.documentElement.clientHeight,
        document.documentElement.clientWidth,
    );

    // scrollTO  滚动窗口到指定位置 
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });
    
    section1.scrollIntoView({behavior:'smooth'});
});


const h1 = document.querySelector('h1');

const alertH1 = (e) => {
    alert('addEventListener:Great!  You are reading the heading :D');
    h1.removeEventListener('mouseenter',alertH1);
}

h1.addEventListener('mouseenter',alertH1);

// h1.onmouseenter = (e) => {
//     alert('addEventListener:Great!  You are reading the heading :D');
// }

setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000);

*/

/*
const randomInt = (min,max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => 
    `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

console.log(randomColor());


document.querySelector('.nav__link').addEventListener('click',function(e) {
    console.log('click the link');
    this.style.backgroundColor = randomColor();
    console.log('LINK',e.terget,e.currentTarget);
    console.log(e.currentTarget === this);

    // e.stopPropagation();

});

document.querySelector('.nav__links').addEventListener('click',function(e) {
    console.log('click the link');
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER',e.terget,e.currentTarget);
});

document.querySelector('.nav').addEventListener('click',function(e) {
    console.log('click the link');
    this.style.backgroundColor = randomColor();
    console.log('NAV',e.terget,e.currentTarget);
},true);

*/

const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';


console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


// DOM Travesing   
//  太无聊 直接跳   这一章学的不太好  2025/6/2



