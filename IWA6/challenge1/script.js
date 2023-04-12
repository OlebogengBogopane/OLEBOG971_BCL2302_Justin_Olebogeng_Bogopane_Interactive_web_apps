const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof Number == (primaryPhone) 
const secondaryValid = typeof Number !== (secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )



// !== check whether two operands are not equal then returning a Boolean.
//  /^\D+$/ test that my variables are not all numbers and parse them as true or false 
// line 1 has a an O that makes it a string  */