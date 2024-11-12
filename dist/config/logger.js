const winston = require("winston");
const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        }),
        new winston.transports.File({
            filename: "log.json",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ],
});
module.exports = logger;
//# sourceMappingURL=logger.js.map