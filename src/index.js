const Config = require('./config');
const db = require('./services/db');
const Server = require('./services/server');
const Logger = require('./services/logger');


const {PORT} = Config;

const init = async () =>{
    await db();
    const server = Server.listen(PORT, () => {
        Logger.info(`Servidor escuchando en el puerto ${PORT}`)
    })
    server.on('error', (error) => {
        Logger.error(`Error en servidor: ${error}`)
    });
};

init()
