
const firstName = 'John';
const age = 35;
const myhobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${myhobby}!`)
}

hobby()
//when we call the function hobby .it calls logTwice and returns parameter which is our closure  that returns the values in our hobby twice .. we also changed hobby to myhobby because it has already been declared as a function