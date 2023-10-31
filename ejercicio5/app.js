let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
const resultInScreen = document.getElementById("result");
const result2InScreen = document.getElementById("result2");
const result3InScreen = document.getElementById("result3");
const result4InScreen = document.getElementById("result4");
const result5InScreen = document.getElementById("result5");
const result6InScreen = document.getElementById("result6");
const result7InScreen = document.getElementById("result7");
document.getElementById("arrayInfo").innerHTML = `[${people}]`;

// 1. Write a command that prints out all of the people in the list.
const listAllPeople = (array) => {
	let listForHTML = "";
	for (let i = 0; i < array.length; i++) {
		listForHTML += "<li>" + array[i] + "</li>";
		console.log(array[i]);
	}
	return listForHTML;
};
resultInScreen.innerHTML = listAllPeople(people);

// 2. Write the command to remove "Dani" from the array.
const removeByName = (studentName) => {
	if (people.includes(studentName)) {
		people = people.filter((name) => name !== studentName);
	}
	return people;
};
console.log(removeByName("Dani"));
result2InScreen.innerHTML = removeByName("Dani");

// 3. Write the command to remove "Juan" from the array.
console.log(removeByName("Juan"));
result3InScreen.innerHTML = removeByName("Juan");

// 4. Write the command to move "Luis" to the front of the array.
const moveToFrontOfArray = (studentName) => {
	removeByName(studentName);
	people.unshift(studentName);
	return people;
};
console.log(moveToFrontOfArray("Luis"));
result4InScreen.innerHTML = moveToFrontOfArray("Luis");

// 5. Write the command to add your name to the end of the array.
const addStudentAtTheEnd = (studentName) => {
	people.push(studentName);
	return people;
};
console.log(addStudentAtTheEnd("Alan"));
result5InScreen.innerHTML = addStudentAtTheEnd("Alan");

// 6. Using a loop, iterate through this array and after console.log "Maria", exit
// from the loop. (usar break)
const findMaria = () => {
	let foundName = "";
	for (let i = 0; i < people.length; i++) {
		if (people[i] === "Maria") {
			foundName = "Maria";
			console.log("Maria encontrada");
			break;
		}
	}
	return foundName;
};
result6InScreen.innerHTML = findMaria();
// 7. Write the command that gives the indexOf where "Maria" is located.
console.log(`Maria esta en el indice ${people.indexOf("Maria")}`);
result7InScreen.innerHTML = `Maria esta en el indice ${people.indexOf(
	"Maria"
)}`;
