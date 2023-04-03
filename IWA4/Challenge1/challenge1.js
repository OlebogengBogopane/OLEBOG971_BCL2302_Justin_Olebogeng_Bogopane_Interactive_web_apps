const date= 2050;
const status= 'student';
let count = 0;

if (date === 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
     
	 let month = 'April';
	console.log(month, 'Family Day');
	console.log(month, 'Freedom Day');
	count += 4;

	if (status === "student") {
	  console.log('June', 'Youth Day');
		count +=1;
    }

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	month = 'December'
	console.log(month, 'Day of Reconciliation')
	count += 3;

	if (status === "parent") {
	  console.log(date, 'Christmas Day');
		 count += 1;
    }

	console.log(month, 'Day of Goodwill');
	count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);


/**
 * line 3 replaced const with let to declared number 0 and all for count to add
 * added strict equality to my if statements if true console
 * changed let to count line 12,16,23,27 and 31
 * replaced count with +=additional assignment
 */