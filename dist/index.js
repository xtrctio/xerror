"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = __importStar(require("http-status"));
/**
 * @class
 */
class RError extends Error {
    /**
     * @param {string} message error message
     * @param {number} [code=500] http error code
     * @param {any} [data] any extra data to attach to the error
     */
    constructor(message, code = HttpStatus.INTERNAL_SERVER_ERROR, data) {
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RError);
        }
        this.name = this.constructor.name;
        this.code = code;
        this.data = data;
        this.dateTime = new Date();
    }
}
exports.RError = RError;
RError.HTTP_STATUS = HttpStatus;
//# sourceMappingURL=index.js.map