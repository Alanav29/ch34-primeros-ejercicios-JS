const student1Courses = ["Math", "Spanish", "Programming"];
const student2Courses = ["Geography", "Spanish", "Programming"];
const resultInScreen = document.getElementById("result");
document.getElementById(
	"arrayInfo"
).innerHTML = `[${student1Courses}],[${student2Courses}]`;

// filtro de palabras con ciclo for y método includes
function filterSubjectsWithFor(firstArray, secondArray) {
	const result = [];
	for (let i = 0; i < firstArray.length; i++) {
		if (secondArray.includes(firstArray[i])) {
			result.push(firstArray[i]);
		}
	}
	return `${result}`;
}
console.log(filterSubjectsWithFor(student1Courses, student2Courses));

// filtro de palabras con método filter

function filterSubjectsWithFilter(firstArray, secondArray) {
	const result = [];
	for (let i = 0; i < firstArray.length; i++) {
		result.push(secondArray.filter((subject) => subject == firstArray[i]));
	}
	result.shift();
	return `${result}`;
}
console.log(filterSubjectsWithFilter(student1Courses, student2Courses));

// filtro de palabras con método filter e includes

const filterSubjectsWithFilterIncludes = (arr1, arr2) => {
	const result = arr2.filter((subject) => {
		if (arr1.includes(subject)) {
			return subject;
		}
	});
	return `${result}`;
};

console.log(filterSubjectsWithFilterIncludes(student1Courses, student2Courses));
resultInScreen.innerHTML = `${filterSubjectsWithFilterIncludes(
	student1Courses,
	student2Courses
)}`;
