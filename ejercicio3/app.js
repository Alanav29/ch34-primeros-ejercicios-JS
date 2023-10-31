const arr = [1, 2, 4, 5];
const firstResultInScreen = document.getElementById("firstResult");
const secondResultInScreen = document.getElementById("secondResult");
document.getElementById("arrayInfo").innerHTML = `${arr}`;

// suma de elementos del array con ciclo for
function sumNumbersWithFor(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}
console.log(`${sumNumbersWithFor(arr)}`);

// multiplicación de elementos del array con ciclo for
function productNumbersWithFor(arr) {
	let result = 1;
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
}
console.log(`${productNumbersWithFor(arr)}`);

// suma de elementos del array con método reduce
function sumNumbersWithReduce(arr) {
	const arrReduced = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);
	return arrReduced;
}
console.log(`${sumNumbersWithReduce(arr)}`);
firstResultInScreen.innerHTML = `${sumNumbersWithReduce(arr)}`;

// multiplicación de elementos del array con método reduce
function productNumbersWithReduce(arr) {
	const arrReduced = arr.reduce(
		(accumulator, currentValue) => accumulator * currentValue
	);
	return arrReduced;
}
console.log(`${productNumbersWithReduce(arr)}`);
secondResultInScreen.innerHTML = `${productNumbersWithReduce(arr)}`;
