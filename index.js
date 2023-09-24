const {
    signature,
    signatureSync,
    delta,
    deltaSync,
    patch,
    patchSync,
} = require("./build/Release/rdiff");

async function signaturePromise(sourceFile, signatureFile) {
    return new Promise((resolve, reject) => {
        signature(sourceFile, signatureFile, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

async function deltaPromise(signatureFile, targetFile, deltaFile) {
    return new Promise((resolve, reject) => {
        delta(signatureFile, targetFile, deltaFile, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

async function patchPromise(sourceFile, deltaFile, outputFile) {
    return new Promise((resolve, reject) => {
        patch(sourceFile, deltaFile, outputFile, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

module.exports = {
    signature,
    signaturePromise,
    signatureSync,
    delta,
    deltaPromise,
    deltaSync,
    patch,
    patchPromise,
    patchSync,
};
