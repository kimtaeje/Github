//const title = document.getElementById('title');
//console.log(title);
//const title = document.getElementsByClassName('title_class');
//console.log(title);
/*const title = document.querySelector('h2');
title.innerText = '안녕하세요!';
title.style.color = 'blue';*/
/*const tit = document.createElement('h1');
const body = document.querySelector('body')
body.appendChild(tit);*/
/*const button = document.querySelector('button');
const removeButton = document.querySelector('.remove');
function handler(event){
    console.log('_');
}
function removeHandler(event){
    button.removeEventListener('click',handler);
}

button.addEventListener('click',handler);
removeButton.addEventListener('click',removeHandler);
*/
import{greeting} from './hello.js';

greeting();


 