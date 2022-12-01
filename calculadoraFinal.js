 
 //pongo el mismo nombre para poner todos los elementos dentro de un arregle
// "name = number"
//por cada recorrido hace el evento click
 
const botonNumeros = document.getElementsByName('data-number'); // obtengo un arreglo con cada uno de los botones numeros. (solo los indices, no los valores)
const botonOperador = document.getElementsByName('data-operador');     //son arreglos traen conjunto de botones
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0]; //botones fijos
var result = document.getElementById('result'); //uso var porq el resultado cambia
var opeActual = '';        //op actual q hacemos conh la calc
var opeAnterior = '';        //se guarda operacion anterior para volver a usarla
//var operacion = undefined;         //por defecto undefine
 
//1ero imprimo los botones nº y operadores:
//capturo eventos click de cada boton
botonNumeros.forEach(function(boton){    //recorro arregle con forEach. Llamo a una funcion que le doy como parámetro "boton" que estoy obteniendo
    boton.addEventListener('click', function(){  //al boton le agrego el evento click y cada vez q hago click llamo a una funcion
      agregarNumero(boton.innerText);             //agrega numero
      //alert(boton.innerText)
    })
}) 
 
botonOperador.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectorOperacion(boton.innerText);
        //alert(boton.innerText)
            })
});

botonIgual.addEventListener('click', function(){  //sin el forEach porque es solo el boton. se agrega solo el evento click
    calcular();
    actualizarDisplay();
 });
 
botonDelete.addEventListener('click', function(){
    clear();                                         //metodo clear limpia la pantalla
    actualizarDisplay();
 
  });
 
 function selectorOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular();
    }
    operacion = op.toString()
    opeAnterior = opeActual;
    opeActual = '';
 }
 
 function calcular(){
    var calculo;                           //guarda la operacion
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return; //si ambos son numericos, hacer return
    switch(operacion){
      case '+':
        calculo = anterior + actual;
      break;
      case '-':
        calculo = anterior - actual;
        break;
      case 'x':
        calculo = anterior * actual;
        break;
      case '/':
        calculo = anterior / actual;
        break;
      default:
        return
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = ''; 
}
 
 //implementar métodos //1ero agregar numero

function agregarNumero(num){
    opeActual = opeActual.toString()  + num.toString(); //numerito es toString para que vaya concatenando los calores, por eso se lo llama como texto
         //para capturar valor en texto.por input text
    actualizarDisplay();
}

function actualizarDisplay(){    //muestra en result.value, la operacion actual
  result.value = opeActual;
}
//si no pongo el string, me sumaria los valores, no los concatenaria
 
function clear (){
      opeActual = '';
      opeAnterior = '';
      operacion = undefined;
} //lo hago con las variables iniciales, cada vez q actualiza la pagina
clear();
