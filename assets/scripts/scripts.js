/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.


Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.



Mostrar un objeto similar a este
let Felipe = {
    nombre: "Felipe",
    apellido: "Maqueda",
    edad: 31,
    email: "felipemaqueda@mail.com",
    telefono: "5512345678",
}
*/


//Creando mi primera clase
class persona {
    //1. propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //3. defino un constructor que tomará los atributos como "material" para la instancia o creación de mi objeto
    //el constructor es una función especial cuya función es la de construir o instanciar objetos
    //al pasar los atributos como parámetros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;

    } //cierre de función constructor

    //2. definir métodos o comportamientos (funciones)
    //para definir los métodos de mi objeto, ya no utilizo la palabra "function" (porque están dentro de una clase)
    hablar() {
        console.log("Hola, estoy hablando...");
    } //cierre de método hablar

    dormir() {
        console.log("Zzzzzzz");
    } //cierre de método dormir

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    } //cierre de método mostrarInfo

} //cierre de la clase persona


/*instancia de objetos tipo persona
sintaxis básica:
 variable.nombreObjeto = palabra reservada "new" nombre de mi clase(parámetros o atributos)
*/
let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");
let persona2 = new persona("Naruto", "Uzumaki", 22, "naruto@hokage.com", "1234567800");
let persona3 = new persona("Edna", "Medina", 29, "ednamedina@mail.com", "3399773344");

//Imprimir el objeto completo
console.log (persona1);

//Imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//Invocar el método de nuestros objetos
persona1.dormir();
persona2.mostrarInfo();
persona3.hablar();



/*
Existen 4 pilares de la POO que nos permiten ampliar las características y dotar de funcionalidades y operaciones a nuestro código:
 - Herencia: 
 - Polimorfismo
 - Encapsulamiento
 - Abstracción

*/

//Creando una nueva clase para aplicar la herencia (extends)
class paciente extends persona{
    //1. Definición de atributos y propiedades
    doctorAtiende = ""; //nombre del doctor que atiende
    historialMedico = ""; //si o no
    alergias = ""; //existentes

    //3. Generación de constructor
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior (clase persona)
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    } //cierre de constructor

    //2. Métodos
    mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
    } //cierre de método mostrarInfo
}//cierre de clase paciente

//Instancia de un paciente 
let paciente1 = new paciente ("Jesus", "Gonzalez", 31, "jesusgonzalez@mail.com", "55987654321", "Dr. Simi", "No tiene", "Penicilina");

//Uso del método mostrarInfo
paciente1.mostrarInfo();
paciente1.dormir();





//Diferencias entre un objeto literal (normal) y un objeto JSON
//Todas las claves y los valores van dentro de comillas
//Envío de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Tratar la información y sacar datos específicos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}





/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicializar sus atributos (metodo constructor), imprimirlos y mostrar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        - nombre
        - nota (calificacion)

    Metodos:
        - Constructor
        - Metodo evaluacion (si aprueba o no)
        - Metodo imprimirInfo (nombre y la nota)

    Logica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, esta reprobado)
        - Recuperamos la informacion por medio de un prompt
        - Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)
*/


//Creación de la clase
class alumno {
    //1. Atributos o propiedades
    nombre;
    nota;

    //3. Constructor donde le di identidad al objeto (this)
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;

    }


    //2. Métodos
    // Método general, no requiere personalización porque aplica para cualquier objeto
    evaluacion (nota){
        //condición para saber si está aprobado o reprobado
        if (nota>=6) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    } //cierre de método evaluacion

    imprimirInfo(){ 
        console.log ("Nombre del alumno: ", this.nombre);
        console.log ("Nota del alumno: ", this.nota);
    } //cierre de método imprimirInfo
}


//Instancias de alumnos
let alumno1 = new alumno ("Felipe", 3);
let alumno2 = new alumno ("Felipe", 8);
let alumno3 = new alumno ("Felipe", 6);

//Invocando métodos
alumno1.evaluacion(alumno1.nota); //Reprobado
alumno2.evaluacion(alumno2.nota); //Aprobado
alumno3.evaluacion(alumno3.nota); //Aprobado