// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const book1 = {

status : document.querySelector('#book1 .status'),
reserve : document.querySelector('#book1 .reserve'),
checkout : document.querySelector('#book1 .checkout'),
checkin : document.querySelector('#book1 .checkin')
}

const book2 =
 {
status : document.querySelector('#book2 .status'),
reserve : document.querySelector('#book2 .reserve'),
checkout : document.querySelector('#book2 .checkout'),
checkin : document.querySelector('#book2 .checkin')
}

const book3 = {
status : document.querySelector('#book3 .status'),
reserve : document.querySelector('#book3 .reserve'),
checkout : document.querySelector('#book3 .checkout'),
checkin : document.querySelector('#book3 .checkin')
}


book1.checkin.style.color = ""
book1.status.style.color = STATUS_MAP.overdue.color

 //book1.reserve = STATUS_MAP.overdue.canReserver ? book1.reserve.enabled = true : book1.reserve.disabled = true;

 if(STATUS_MAP.overdue.canReserve == true) {
    book1.reserve.enabled = true
}else{
    book1.reserve.disabled = true
}
if(STATUS_MAP.overdue.canCheckout== true) {
    book1.checkout.enabled = true
}else{
    book1.checkout.disabled = true
}


book2.checkin.style.color = ""
book2.status.style.color = STATUS_MAP.reserved.color

if(STATUS_MAP.reserved.canReserve == true) {
    book2.reserve.enabled = true
}else{
    book2.reserve.disabled = true
}




if(STATUS_MAP.reserved.canCheckin == true) {
    book2.checkin.enabled = true
}else{
    book2.checkin.disabled = true
}


if(STATUS_MAP.reserved.canReserve == true) {
    book3.reserve.enabled = true
}else{
    book3.reserve.disabled = true
}
 
if(STATUS_MAP.reserved.canCheckIn == true) {
    book3.reserve.enabled = true
}else{
    book3.reserve.disabled = true
}

if(STATUS_MAP.overdue.canReserve == true) {
    book3.checkout.enabled = true
}else{
    book3.checkout.disabled = true
}
book3.checkin.style.color = ""
book3.status.style.color = STATUS_MAP.checkin.color


// book1.checkout0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
// book1.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

/** 
const checkin1 =color(none);
const status1 = style.color = STATUS_MAP.status.color;
 reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
 checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin2 = color(none)
const status2 = style.color = STATUS_MAP.status.color
const reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
const checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
const checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

*/