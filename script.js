let createGrid = () => {
	var gridNumber = prompt("enter number between 1 and 64");
	var container = document.querySelector(".container");
	
	
	for (var i = 0; i < gridNumber*gridNumber;i++){
		var div = document.createElement("div");
		div.classList.add("pixel");
		div.style.height = (800/gridNumber - 2).toString() + "px";
		div.style.width = (800/gridNumber - 2).toString() + "px";
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
	location.reload();
});
createGrid();