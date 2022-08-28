const winston = require('winston');

const Config = require('../config');

const {createLogger, format, transports } = winston;
const {combine, timestamps, prettyPrint} = format;
const {Console, File} =transports;

const logConf = {
    level: 'info',
    format: combine(timestap(), prettyPrint()),
    transports: [new Console({level: 'info'})]
}


const logger = createLogger(logConf)

if (Config.NODE_ENV !== 'development') {
    logger.add(
        new File({
            filename: './logs/error.log',
            level: 'error'
        })
    )
    logger.add(
        new File({
            filename: './logs/info.log'
        })
    )
}


export default logger