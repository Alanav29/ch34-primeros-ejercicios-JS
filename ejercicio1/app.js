const arr = ["This", "is", "a", "sentence."];
const resultInScreen = document.getElementById("result");
document.getElementById("arrayInfo").innerHTML = `${arr}`;

// concatenación elemento del array con ciclo for
function printOutStringWithFor(arr) {
	let phrase = "";
	for (let i = 0; i < arr.length; i++) {
		phrase += arr[i] + " ";
	}
	return phrase;
}
console.log(printOutStringWithFor(arr));

// concatenación con método join
function printOutStringWithJoin(arr) {
	return arr.join(" ");
}
console.log(printOutStringWithJoin(arr));
resultInScreen.innerHTML = printOutStringWithJoin(arr);
