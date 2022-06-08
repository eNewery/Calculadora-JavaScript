//DECLARACION DE VARIABLES


// SUMA

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}


//RESTA

function restar(primerNumero, segundoNumero) {
    return primerNumero - segundoNumero;
}


// DIVISION

function dividir(primerNumero, segundoNumero) {
    if (segundoNumero != 0) {
        return primerNumero / segundoNumero;
    }
    return 'No es posible realizar esa operación'
}



// MULTIPLICACION

function multiplicar(primerNumero, segundoNumero) {
    return primerNumero * segundoNumero;
}


//DECLARACION DE VARIABLES CON PROMPT PARA ELEGIR OPERACION


let operacion = prompt('Elija una operción:\n1. Suma\n2. Resta\n3. Multiplica\n4. Divide');
let numero1 = parseFloat(prompt('ingrese un numero para sumar'));
let numero2 = parseFloat(prompt('ingrese un numero para sumar'));
let resultado = 0;



switch (operacion) {
    case "1":
        resultado = sumar(numero1, numero2);
        alert(resultado);
        break;
    case "2":
        resultado = restar(numero1, numero2);
        alert(resultado);
        break;
    case "3":
        resultado = multiplicar(numero1, numero2);
        alert(resultado);
        break; case "4":
        resultado = dividir(numero1, numero2);
        alert(resultado);
        break;
    default:
        alert(resultado);
        break;
}



