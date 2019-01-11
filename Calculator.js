var answer = document.getElementById("answer");
var info = document.getElementById("info");
var writing_number = "";
var current_number = 0;
var old_number = 0;
var oper = "";
function myFunction(n) {
	writing_number+=n;
	answer.innerHTML = writing_number;
}

function equals() {
	var new_writing_number = writing_number.replace(/ANS/g, current_number.toString());
	old_number = current_number;
	current_number = eval(new_writing_number);
	answer.innerHTML = current_number.toString();
	writing_number = "";
}

function operator(n) {
	var new_number = true;
	if(writing_number==="") {
		new_number = false;
	}
	switch(oper) {
		
		case "":
			old_number = current_number;
			current_number = +writing_number;
			writing_number = "";
			break;
		case "+":
			old_number += current_number;
			writing_number = "";
			break;
		case "-":
			old_number -= current_number;
			writing_number = "";
			break;
		case "/":
			old_number /= current_number;
			writing_number = "";
			break;
		case "*":
			old_number *= current_number;
			writing_number = "";
			break;
		case "=":
			writing_number = "";
			break;
		default:
			alert("Invalid operator.");
			break;
	}
	if(new_number) {
		answer.innerHTML = current_number.toString();
	} else {
		answer.innerHTML = old_number.toString();
	}
	oper = n;

}

function clear_data() {
	writing_number = "";
	old_number = 0;
	current_number = 0;
	oper = "";
	answer.innerHTML = "0";
}
function ans() {
	var temp_current = current_number;
	current_number = old_number;
	old_number = temp_current
	operator("=");
	current_number = temp_current;
}
function ln() {
	operator("=");
	current_number = Math.log(old_number);
	old_number = Math.log(old_number);
	answer.innerHTML = old_number.toString();

}

function exp() {
	operator("=");
	current_number = Math.exp(old_number);
	old_number = Math.exp(old_number);
	answer.innerHTML = old_number.toString();
}