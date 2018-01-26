let createGrid = () => {
	var gridNumber = prompt("enter number between 1 and 64");
	var container = document.querySelector(".container");
	for (var i = 0; i < gridNumber;i++){
		container.createElement("div");
	}
}