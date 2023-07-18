const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { fetchCountries } = require("./src/controllers/FetchCountries")


conn.sync({ force: true }).then(async () => {
await fetchCountries() // Guardamos los datos de la API en nuestra base de datos
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error.message))
