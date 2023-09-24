export function signature(sourceFile: string, signatureFile: string, callback: (error: any) => void): void;
export function delta(signatureFile: string, targetFile: string, deltaFile: string, callback: (error: any) => void): void;
export function patch(sourceFile: string, deltaFile: string, outputFile: string, callback: (error: any) => void): void;

export function signatureSync(sourceFile: string, signatureFile: string): void;
export function deltaSync(signatureFile: string, targetFile: string, deltaFile: string): void;
export function patchSync(sourceFile: string, deltaFile: string, outputFile: string): void;

export function signatureAsync(sourceFile: string, signatureFile: string): Promise<void>;
export function deltaAsync(signatureFile: string, targetFile: string, deltaFile: string): Promise<void>;
export function patchAsync(sourceFile: string, deltaFile: string, outputFile: string): Promise<void>;

export { signature, delta, patch, signatureSync, deltaSync, patchSync, signatureAsync, deltaAsync, patchAsync };
