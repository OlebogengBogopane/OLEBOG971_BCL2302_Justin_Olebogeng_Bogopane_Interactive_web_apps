// johannes.js

const firstname = "Johannes";
const surname = "Potgieter";
export const role3 = "Intern";

const display= firstname + " " + surname + " (" + role3 + ")";
document.querySelector('#johannes').innerText = display;

/*
 *replaced private with "const"  on line and added number to role so that the different roles do not crash
 added export to role so that it can export to scripts then to console
 */