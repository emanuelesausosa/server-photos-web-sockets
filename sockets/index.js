// escribir la funcion orquesta de todos los sockets
const channels = server => {
  // 1. imporar la libreria socket.io
  // ademas de pasarle el servidor (http) por referencia
  let io = require("socket.io")(server);

  // creamos nuestro primer evento (escucha [on])
  io.on("connect", socket => {
    // socket es una conexion (tunel) entre el cliente y el server

    console.log("Un cliente se ha conectado" + socket.client.id);

    // las suscripciones, es decir los canales de escucha y emision
    socket.on("channel:saludo", post => {
      console.log(JSON.stringify(post));

      io.emit("channel:saludo:res", post);
    });

    // canal de desconexion
    socket.on("disconnect", () => {
      console.log("un cliente se ha DESCONECTADO!");
    });
  });
};
// exporar la funcion
module.exports = channels;
