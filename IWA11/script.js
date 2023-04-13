// script.js

const root1 = document.querySelector('[data-key="order1"]');
const biscuit1 = parseInt(root1.getAttribute('data-biscuits'));
const donut1 = parseInt(root1.getAttribute('data-donuts')); 
const pancake = parseInt(root1.getAttribute('data-pancakes')); 
const status1= root1.getAttribute('data-delivered')==="true"?"Delivered":"Pending";
const one =document.querySelector('h2');

//order2
document.querySelectorAll('.biscuits dd')[1].innerText = biscuit2
document.querySelectorAll('.donuts dd')[1].innerText = donut2
document.querySelectorAll('.pancakes dd')[1].innerText = pancake2
document.querySelectorAll('.status')[1].innerText = status2

//order3
const root3 = document.querySelector('[data-key="order3"]');
const biscuit3= parseInt(root3.getAttribute('data-biscuits'));
const donut3= parseInt(root3.getAttribute('data-donuts'));
const pancake3 = parseInt(root3.getAttribute('data-pancake'));
const status3= root3.getAttribute('data-delivered')==="true"?"Delivered":"Pending"

document.querySelectorAll('.biscuits dd')[2].innerText = biscuit3
document.querySelectorAll('.donuts dd')[2].innerText = donut3
document.querySelectorAll('.pancakes dd')[2].innerText = pancake3
document.querySelectorAll('.status dd')[2].innerText =status3
//added tenery operator (? :) is used to check the value of the 'data delivered' attribite and set the text content accordingly.
//added the 'getAttribute' property to set of the element based on the corresponding data attributes.