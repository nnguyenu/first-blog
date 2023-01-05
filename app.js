// DOM manipulation

// Styling elements

// const all_td = document.querySelectorAll('td');
// console.log(all_td);
// const TD = document.getElementsByTagName('td'); // get a list of all td
// console.log(TD);

// sometimes we need to specify whether select a class,tag or id by adding '.' (class) or '#' (id)
const main_title = document.querySelector('#main-title');
console.log(main_title);
main_title.style.color = 'red';

const all_td = document.querySelectorAll('td');
console.log(all_td);

const listPart = document.getElementsByClassName('part');
console.log(listPart);
for (i = 0; i < listPart.length; i++){
    listPart[i].style.fontSize = '3rem'
}

// Creating elements