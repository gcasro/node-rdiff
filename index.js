const { signature, delta, patch, signatureSync, deltaSync, patchSync } = require("./build/Release/rdiff");

async function signatureAsync(sourceFile, signatureFile) {
    return new Promise((resolve, reject) => {
        signature(sourceFile, signatureFile, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

async function deltaAsync(signatureFile, targetFile, deltaFile) {
    return new Promise((resolve, reject) => {
        delta(signatureFile, targetFile, deltaFile, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

async function patchAsync(sourceFile, deltaFile, outputFile) {
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
    delta,
    patch,

    signatureSync,
    deltaSync,
    patchSync,

    signatureAsync,
    deltaAsync,
    patchAsync,
};
