let createGrid = () => {
	var gridNumber = prompt("enter number between 1 and 64");
	var container = document.querySelector(".container");
	
	
	for (var i = 0; i < gridNumber;i++){
		var div = document.createElement("div");
		div.classList.add("pixel");
		container.appendChild(div);
		console.log("run")
	}
	div.addEventListener("click", () =>{
		div.backgroundColor = black;
	})
}
createGrid();