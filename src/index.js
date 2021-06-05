class Loggerine {
    #module
    #debugLevel
    #useVanillaFunctions

    constructor(props) {
        if(props != null) {
            this.#module = props.module;
            this.#debugLevel = props.debugLevel || 2; // 0 - nothing, 1 - error, 2 - warn, 3 - info, 4 - debug
            this.#useVanillaFunctions = props.vanillaFunctions || true;
        }
        else {
            this.#debugLevel = 2;
            this.#useVanillaFunctions = true;
        }
    }

    debug(...message) {
        if(this.#debugLevel < 4) return;
        const date = new Date();

        if(this.#useVanillaFunctions) console.debug(this.#string("debug", message), "font-weight: bold; color: lightblue;", "");
        else console.log(this.#string("debug", message), "font-weight: bold; color: lightblue;", "");
    }

    info(...message) {
        if(this.#debugLevel < 3) return;
        const date = new Date();

        if(this.#useVanillaFunctions) console.info(this.#string("info", message), "font-weight: bold; color: aqua;", "");
        else console.log(this.#string("info", message), "font-weight: bold; color: aqua;", "");
    }

    log(...message) {
        this.info(message);
    }

    warn(...message) {
        if(this.#debugLevel < 2) return;
        const date = new Date();

        if(this.#useVanillaFunctions) console.warn(this.#string("warn", message), "font-weight: bold; color: amber;", "");
        else console.log(this.#string("warn", message), "font-weight: bold; color: amber;", "");
    }

    error(...message) {
        if(this.#debugLevel < 1) return;

        if(this.#useVanillaFunctions) console.error(this.#string("error", message), "font-weight: bold; color: amber;", "");
        else console.log(this.#string("error", message), "font-weight: bold; color: amber;", "");
    }

    #string(logType, ...message) {
        const date = new Date();
        const formattedDate = `${date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}`}:${date.getUTCMinutes() > 9 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`}`

        return `%c[${logType.toUpperCase()}${this.#module ? ` - ${this.#module}` : ``}] %c${formattedDate} ${message}`;
    }
}

module.exports = Loggerine;
