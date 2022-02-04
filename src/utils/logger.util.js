import log4js from "log4js";
import config from "../config/config.js"

log4js.configure({
  appenders: {
    logConsole: { type: "console" },
    logFileInfo: { type: "file", filename: "./logs/info.log" },
    logFileWarn: { type: "file", filename: "./logs/warn.log" },
    logFileError: { type: "file", filename: "./logs/error.log" },
  },

  categories: {
    default: { appenders: ["logConsole"], level: "trace" },
    info: { appenders: ["logFileInfo"], level: "info" },
    warn: { appenders: ["logFileWarn"], level: "warn" },
    error: { appenders: ["logFileError"], level: "error" },
  },
});

const loggerConsole = log4js.getLogger("trace");
const loggerInfo = log4js.getLogger("info");
const loggerWarn = log4js.getLogger("warn");
const loggerError = log4js.getLogger("error");

const dev = config.nodeEnv == 'development';

const logConsol = msg => {
  dev ? loggerConsole.trace(msg) : loggerConsole.info(msg);
}

const logInfo = (msg) => loggerInfo.info(msg);
const logWarning = (msg) => loggerWarn.warn(msg);
const logError = (msg) => loggerError.error(msg);

export { logConsol, logInfo, logWarning, logError };