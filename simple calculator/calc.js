var equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click' , equal);

function data(val) {
	calc.display.value += val;
}

function delAll() {
	calc.display.value = null;
}

function del() {
	calc.display.value = calc.display.value.slice(0, -1);  
}

function equal() {
	calc.display.value = eval(calc.display.value);	
}
