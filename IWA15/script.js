// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const{lists} = data;
const  first = false ? [] : lists[0][1];
const  second = false ? [] :lists[1][1];
const  third  = false ? [] :lists[2][1];

const result = []

const extractBiggest = () => 
{
	let biggest;
	let lastNumberInFirst = first[first.length - 1];
	let lastNumberInSecond = second[second.length - 1];
	let lastNumberInThird = third[third.length - 1];
	
if (first && lastNumberInFirst >= lastNumberInSecond) {
	biggest = lastNumberInFirst;
	first.pop();
	return biggest;

}

if (second && lastNumberInSecond > lastNumberInThird) {
	biggest = lastNumberInSecond;
	second.pop();
	return biggest;
}

	if (third) {
		biggest = lastNumberInThird;
		third.pop();
		return biggest;
	}

};



// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)