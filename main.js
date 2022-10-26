class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(nombre){
        this.mascotas.push(nombre)
    }
    countMascotas(){
        return`${this.nombre} ${this.apellido} tiene ${this.mascotas} mascotas`
    }
    addBook(nombre, autor){
        let libro = {nombre: nombre, autor: autor};
        return this.libros.push(libro)
    }
    getBookNames(){
        let nombreLibro = this.libros.map((libro) => {
            return libro.nombre
        })
        return `Los libros de ${this.getFullName()} son: ${nombreLibro}`
    }
}

let usu1 = new Usuario("Matias", "Martines");
console.log(usu1);

usu1.addMascotas("rene");
usu1.addMascotas("pepe");
console.log(usu1.countMascotas());

usu1.addBook("Cien años de soledad", "Gabriel García Márquez")
usu1.addBook("El extranjero", "Albert Camus ")

console.log(usu1.libros)
console.log(usu1.getBookNames());