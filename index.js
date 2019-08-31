// 1. obtner/importar la libreria express
const app = require("express")();
// x.1 donde necesitamos el http de node js como server
const server = require("http").createServer(app);
// usar path para publicar html
const path = require("path");

// 2. instanciar el servidor (express)
//const app = express();
// x.2  pasarle los atributos de servidor a http
// http.createServer(app);

// 3. crear el puerto
const port = 3000;

// 4. crear un metodo GET inicial
app.get("/", (req, res) => {
  // res.end("Hola desde web sockets!");
  res.sendFile( path.join(__dirname, "./views/index.html") );
});

// X.3 imporar el channels
const channels = require("./sockets");
channels(server);

// 5. crear un listener del servidor
server.listen(port, () => {
  console.log("Server start on > http://localhost:" + port);
});
