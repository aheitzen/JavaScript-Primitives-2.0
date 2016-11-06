var people = [
	"Moe, Doe, 31, 1234 Park st.",
	"Larry, Doe, 36, 1234 Spark st.",
	"Curly, Doe, 36, 1239 Park st.",
	"Jane, Doe, 32, 1239 Spark st.",
	"Emma, Doe, 34, 1235 Spark st.",
	"Elizabeth, Doe, 36, 1234 Park st.",
	"Elinor, Doe, 35, 1230 Park st.",
	"Mary, Doe, 31, 1231 Park st.",
	"Darcy, Doe, 32, 1224 Park st.",
	"Grey, Doe, 34, 1214 Park st.",
	"Lydia, Doe, 30, 1294 Park st.",
	"Harriet, Doe, 32, 1324 Park st."
];

var emptyArray = [];

function getPersonObject(person) {
	var personArray = person.split(', ')
	var personObject = {
		firstName: personArray[0],
		lastName: personArray[1],
		age: personArray[2],
		address: personArray[3]
	}
	return personObject;
}

for (var i = 0; i < people.length ;i++) {
	emptyArray.push(getPersonObject(people[i]));
}

console.log(emptyArray);


