class User {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
        this.books = [];
        this.pets = [];
    }
    getFullName = () =>{
        return `Mi nombre es ${this.name} y mi apellido es ${this.surname}`
    }
    
    addMascota = (simba) =>{
     return  this.pets.push(simba);
    }
    
    countMascotas = () =>{
        return `La cantidad de mascotas es de ${this.pets.length} mascotas`
    }
    
    addBook = (book,author) =>{
      return  this.books.push({title: book, author: author});
    }
    
    getBookNames = () =>{
        this.books.map((book)=>{
            return console.log(`Title: ${book.title}  `)
        })
    }
}


const USER1 = new User ("Ezequiel" ,"Ortigoza");

console.log(USER1.getFullName());

USER1.addMascota("dogo");
USER1.addMascota("tobi");
USER1.addMascota("teo");
console.log(USER1.countMascotas())


USER1.addBook("El señor de los anillos","Freud")
USER1.addBook("Nascary","Bin Laden")

USER1.getBookNames();









