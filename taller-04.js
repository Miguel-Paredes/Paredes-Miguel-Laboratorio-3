// Métodos 
const automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    características: ["Bluetooth", "Cámara de retroceso", "Control de crucero"],
    estáDisponible: true,
    iniciarMotor() {
      return "¡Motor encendido!";
    },
    detenerMotor() {
      return "¡Motor apagado!";
    }
};

console.log("Recuperar las claves del objeto:", Object.keys(automovil));
console.log("Obtener los valores del objeto:", Object.values(automovil));
console.log("Obtener las claves y valores del objeto en un array:", Object.entries(automovil));

//Nombres Abreviados

const productName = "Smartphone";
const productPrice = 800;

const newProduct = {
    name: productName,
    price: productPrice
};

console.log(newProduct);