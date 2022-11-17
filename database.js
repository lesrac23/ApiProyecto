console.log("I'm Alive");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURI);

//Definir esquema, recibe informacion
const ElementSchema = mongoose.Schema({
  elementName : {type: String, require: true},
  expNum : {type: Number, require: true, unique: true},
  contactNumer : Number,
  rfc : {type: String, unique: true},
  grade : {type: String , enum: ['Guardia Nacional', 'Subagente', 'Agente',
'Agente Mayor', 'Suboficial', 'Oficial', 'Segundo Subinspector']}},
{
  collection: 'Elements'
});


function obtenerElements () {
    const Element = mongoose.model("Element", ElementSchema);
    //Se trae todos los productos y regresa una promesa
    Element.find().then(data => console.log(data));
}

const Element = mongoose.model("Element", ElementSchema);

function crearElement(element){
    const prod = new Element(element);
    //regresa una promesa
    prod.save()
    .then( res => console.log(res))
}

const info ={

    elementName: "Lesly Ramos Carranza",
    expNum: 60900,
    contactNumer: 16475716,
    rfc: "RACL800406",
    grade: "Suboficial"
}

//crearProducto(info);
//obtenerProductos();

function obtenerElemPorexpNumber (expNum){
    const query ={
        'expNum': {
          '$lte': expNum
        }
      }
      Element.find(query).then(data => console.log(data));
}

//obtenerProdPorPrecio(100);

/* function Agregacion(precio){
    //Para ejecutar agregaciones
    const agr = [[
        {
          '$project': {
            'nombre': 1, 
            'precio': 1, 
            '_id': 0
          }
        }, {
          '$match': {
            'precio': {
              '$lte': precio
            }
          }
        }, {
          '$sort': {
            'precio': -1
          }
        }
      ]]
    Element.aggregate(agr).then(data => console.log(data));
} */

//Agregacion(100);

//UPDATE: Buscar y despues Guardar

