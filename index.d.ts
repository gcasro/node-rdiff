// Async callback API.
export function signature(sourceFile: string, signatureFile: string, callback: (error: any) => void): void;
export function delta(signatureFile: string, targetFile: string, deltaFile: string, callback: (error: any) => void): void;
export function patch(sourceFile: string, deltaFile: string, outputFile: string, callback: (error: any) => void): void;

// Synchronous API.
export function signatureSync(sourceFile: string, signatureFile: string): void;
export function deltaSync(signatureFile: string, targetFile: string, deltaFile: string): void;
export function patchSync(sourceFile: string, deltaFile: string, outputFile: string): void;

// Async promise-based API.
export function signatureAsync(sourceFile: string, signatureFile: string): Promise<void>;
export function deltaAsync(signatureFile: string, targetFile: string, deltaFile: string): Promise<void>;
export function patchAsync(sourceFile: string, deltaFile: string, outputFile: string): Promise<void>;
