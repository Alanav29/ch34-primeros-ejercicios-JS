let numbersToCompare = [3, 6, 12, 5, 100, 1];
let resultInScreen = document.getElementById("result");
document.getElementById("arrayInfo").innerHTML = `[${numbersToCompare}]`;

// Crear función para ordenar con método de burbuja
const changePositionLeftToRight = (arr, pos1, pos2) => {
	let positionWhereAdd = pos2 + 1;
	let positionToDelete = pos1;
	arr.splice(positionWhereAdd, 0, arr[pos1]);
	arr.splice(positionToDelete, 1);
};

const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			let k = j + 1;

			if (arr[j] > arr[k]) {
				changePositionLeftToRight(arr, j, k);
			}
		}
	}
	return `[${numbersToCompare}]`;
};

resultInScreen.innerHTML = bubbleSort(numbersToCompare);
console.log(bubbleSort(numbersToCompare));
