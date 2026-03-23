//Por Luis Mario Ireta Xiu

// Cadena JSON
const jsonString = '{"nombre":"Taco de Pollo","ingredientes": {"proteina":"Pollo","salsa":"Salsa Verde"}}';

// Deserializar para convertir a objeto JavaScript
const objetoDeserealizado = JSON.parse(jsonString);

console.log(objetoDeserealizado);