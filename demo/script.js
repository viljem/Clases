// var miAuto={
//     nombre:"City",
//     marca:"Honda",
//     modelo:2018,
//     alerta: function() {
//         alert(this.nombre)
//     }
// }


// function auto(nombre,marca,modelo) {
//     this.nombre=nombre;
//     this.marca=marca;
//     this.modelo=modelo;
//     this.detalles=function () {
//         alert(this.marca);
//     }
// }

// var articulos=[
//     {nombre: "Bici",costo: 3000},
//     {nombre: "Tv",costo: 2500},
//     {nombre: "Libro",costo: 320},
//     {nombre: "Celuar",costo: 10000},
//     {nombre: "Laptop",costo: 20000},
//     {nombre: "Teclado",costo: 500},
//     {nombre: "Audifonos",costo: 1700}
// ];

// var calis=articulos.filter((art)=>{
//     return art.costo>=5000;
// })

// var calis2=articulos.map(art=>art.nombre);

// var articulo=articulos.find(art=>art.nombre==="Libro");

// articulos.forEach(function(art){
//     console.log(art.nombre);
// })

// var hayBaratos=articulos.some(function (art) { return art.costo<1000 });


// var caja=document.getElementById('cajita').innerHTML;

//var miVariable=document.querySelector("#cajita");

let input1=document.querySelector("#cal1");
let input2=document.querySelector("#cal2");
let btnCalc=document.querySelector("#btnCalcular");
let resultado=document.querySelector("#resultado");
let form=document.querySelector("#formulario");

form.addEventListener("submit",envioFormulario);
btnCalc.addEventListener("click",miFuncion);

function miFuncion(){
    let res=parseInt(input1.value)+parseInt(input2.value);
    resultado.innerHTML="El resultado es: " + res;
}

function envioFormulario(event) {
    console.log("Se envió el formulario");
    event.preventDefault();    
}
