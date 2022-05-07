class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); // Add a "message" property to the object.
        this.code = errorCode; // Add a "code" property to the object.
    }
}

module.exports = HttpError;