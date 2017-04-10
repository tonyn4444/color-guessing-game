var colors = [ 
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var pickedColorTitle = document.querySelector("#picked-color");
var messageDisplay = document.querySelector("#message");
pickedColorTitle.textContent = pickedColor;


for (i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i]
	squares[i].addEventListener("click", function() {
		if (this.style.background != pickedColor) {
			this.style.background = "#232323"
			messageDisplay.textContent = "Wrong! Try again"
		} else {
			for (j = 0; j < squares.length; j++) {
				squares[j].style.background = pickedColor;
				messageDisplay.textContent = "Correct!";
			}
		}
	});
}



