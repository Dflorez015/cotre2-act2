function primos() {
	let n = parseInt(document.getElementById('txtnumPrimos').value);
	let primos = []
	for (let i = 1; i <= n; i++) {
		if (primo(i)) {
			primos.push(i)
		}	
		
	}
	document.getElementById('resultadoPrimos').innerHTML = 'Los números primos desde 1 hasta '+n+' son: '+primos;
}

const primo = (x) => {
	let element = [];
	for (let i = 1; i <= x; i++) {
		if (x % i == 0) {
			element.push(i);
		}
	}
	if(element.length == 2){
		return true;
	}else{
		return false;
	}
}

function fibonacci() {
	let n = parseInt(document.getElementById('txtnumFibonacci').value);
	let fibonacci = [0, 1];
	for (let i = 2; i < n; i++) {
		fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
	}
	document.getElementById('resultadoFibonacci').innerHTML = 'Los primeros ' + n + ' numeros de la serie de Fibonacci son: ' + fibonacci;
}

function sumatoria() {
	let n = parseInt(document.getElementById('txtnumSumatoria').value);
	let x = 0, exp = 0;
	for (let i = 0; i <= n; i++) {
		exp = Math.pow(i, n);
		x += exp;
	}
	document.getElementById('resultadoSumatoria').innerHTML = 'La sumatoria de 1^n + 2^n +...+ n^n donde n es ' + n + ', es: ' + x;
}
