const arr = [1, 2, 4, 5];
const resultInScreen = document.getElementById("result");
document.getElementById("arrayInfo").innerHTML = `${arr}`;

// con ciclo for
function doubleNumbersWithFor(arr) {
	const numbersPerTwo = [];
	for (let i = 0; i < arr.length; i++) {
		let numberPerTwo = arr[i] * 2;
		numbersPerTwo.push(numberPerTwo);
	}
	return numbersPerTwo;
}
console.log(`${doubleNumbersWithFor(arr)}`);

// con método map
function doubleNumbersWithMap(arr) {
	const doubles = [];
	arr.map((number) => doubles.push(number * 2));
	return doubles;
}
console.log(`${doubleNumbersWithMap(arr)}`);
resultInScreen.innerHTML = `${doubleNumbersWithMap(arr)}`;
