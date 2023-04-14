// script.js

const root1 = document.querySelector('[data-key="order1"]');
const biscuit1 = parseInt(root1.getAttribute('data-biscuits'));
const donut1 = parseInt(root1.getAttribute('data-donuts')); 
const pancake1 = parseInt(root1.getAttribute('data-pancakes')); 
const status1= root1.getAttribute('data-delivered')==="true"?"Delivered":"Pending";
const one = document.querySelector('h2');

document.querySelectorAll('.biscuit dd')[1].innerText = biscuit1
document.querySelector('.donuts dd')[1].innerText = donut1
document.querySelector('.pancakes dd')[1].innerText = pancake1
document.querySelector('.status dd')[1].innerText = status1



//order2
const root2 = document.querySelector('[data-key="order2"]');
const biscuit2 = parseInt(root2.getAttribute('data-biscuits'));
const donut2 = parseInt(root2.getAttribute('data-donuts'));
const pancake2 = parseInt(root2.getAttribute('data-pancake'));
const status2 = root2.getAttribute('data-delivered')==="true"?"Delivered":"Pending"

document.querySelectorAll('.biscuits dd')[2].innerText = biscuit2
document.querySelectorAll('.donuts dd')[2].innerText = donut2
document.querySelectorAll('.pancakes dd')[2].innerText = pancake2
document.querySelectorAll('.status')[2].innerText = status2



//order3
const root3 = document.querySelector('[data-key="order3"]');
const biscuit3 = parseInt(root3.getAttribute('data-biscuits'));
const donut3 = parseInt(root3.getAttribute('data-donuts'));
const pancake3 = parseInt(root3.getAttribute('data-pancake'));
const status3 = root3.getAttribute('data-delivered')==="true"?"Delivered":"Pending";

document.querySelectorAll('.biscuits dd')[2].innerText = biscuit3
document.querySelectorAll('.donuts dd')[2].innerText = donut3
document.querySelectorAll('.pancakes dd')[2].innerText = pancake3
document.querySelectorAll('.status dd')[2].innerText =status3
//added tenery operator (? :) is used to check the value of the 'data delivered' attribite and set the text content accordingly.
//added the 'getAttribute' property to set of the element based on the corresponding data attributes.