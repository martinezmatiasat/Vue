const persona = {
   nombre: "Matías",
   apellido: "Martínez",
   domicilio: {
      calle: "Calle 1",
      altura: "456",
      cp: "1775",
      ciudad: "Cd. Gotica"
   }
}

const persona2 = { ...persona }

persona2.nombre = "Pirulo"

console.log(persona)
console.log(persona2)