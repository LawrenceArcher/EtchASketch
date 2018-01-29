let createGrid = () => {
	var gridNumber = prompt("enter number between 1 and 64");
	var container = document.querySelector(".container");
	
	
	for (var i = 0; i < gridNumber;i++){
		var div = document.createElement("div");
		div.classList.add("pixel");
		container.appendChild(div);
		console.log("run");
	}
	var div64 = document.querySelectorAll(".pixel");

	div64.forEach((div)=>{
		div.addEventListener("mouseover", (e) => {
		e.target.style.backgroundColor = "black";
		});
	});
	
}
document.querySelector("#reset").addEventListener("click", ()=>{
	document.querySelector(".container").removeChild(".pixel");
	createGrid();
});
let resetGrid = () =>{
	var div64 = document.querySelectorAll(".pixel");
	div64.forEach((div)=>{

		div.style.backgroundColor = "white";
	})
}
createGrid();