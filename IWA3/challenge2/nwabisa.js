// nwabisa.js

const firstname = "Nwabisa";
const surname = "Gabe";
export const role = "CEO";

const display = firstname + " " + surname + " (" + role + ")";
document.querySelector('#nwabisa').innerText = display;

/*
 *replaced private with "const" and added number to role so that the different roles do not crash
 added export to role so that it can export to scripts then to console
 */