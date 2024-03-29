import { dirname as pathDirname } from "node:path";
import { fileURLToPath } from "node:url";
export interface UnderscorePathOutput {
	__dirname: string;
	__filename: string;
}
/**
 * Bring back `__dirname` and `__filename` within 2 lines.
 * @param {string} importMetaURL Insert `import.meta.url`.
 * @returns {UnderscorePathOutput} Output.
 * @example
 * const { __dirname, __filename } = underscorePath(import.meta.url);
 */
export function underscorePath(importMetaURL: string): UnderscorePathOutput {
	const __filename: string = fileURLToPath(importMetaURL);
	const __dirname: string = pathDirname(__filename);
	return { __dirname, __filename };
}
export default underscorePath;
