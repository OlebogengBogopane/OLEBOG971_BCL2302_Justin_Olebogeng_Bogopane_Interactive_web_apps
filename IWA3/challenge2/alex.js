// alex.js

const firstname = "Alex";
const surname = "Naidoo";
export const role2 = "Head of Marketing";

const display= firstname + " " + surname + " (" + role2 + ")";
document.querySelector('#alex').innerText = display;

/*
 *replaced private with "const" and added number to role so that the different roles do not crash
 added export to role so that it can export to scripts then to console
 */