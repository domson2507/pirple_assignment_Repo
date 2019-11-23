function Man (name, isMan){
	this.name = name;
	this.isMan = isMan;
	this.mortal = true;
};

var firstPerson = new Man("Socrate", true);

if (firstPerson.isMan){
	console.log(firstPerson.name + " is mortal? " + firstPerson.mortal);
}else {
	console.log (firstPerson.name + " is not mortal.");
}








