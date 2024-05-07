# __Path  (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/underscore-path-es](https://img.shields.io/github/v/release/hugoalh-studio/underscore-path-es?label=hugoalh-studio/underscore-path-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/underscore-path-es")](https://github.com/hugoalh-studio/underscore-path-es)
[![JSR: @hugoalh/underscore-path](https://img.shields.io/jsr/v/@hugoalh/underscore-path?label=JSR%20@hugoalh/underscore-path&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/underscore-path")](https://jsr.io/@hugoalh/underscore-path)
[![NPM: @hugoalh/underscore-path](https://img.shields.io/npm/v/@hugoalh/underscore-path?label=@hugoalh/underscore-path&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/underscore-path")](https://www.npmjs.com/package/@hugoalh/underscore-path)

An ES (JavaScript & TypeScript) module to bring back `__dirname` and `__filename` within 2 lines of code.

```ts
/* ☹️ */
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

```ts
/* 🙂 */
import { underscorePath } from "jsr:@hugoalh/underscore-path";
const { __dirname, __filename } = underscorePath(import.meta.url);
```

## 🔰 Begin

### 🎯 Targets

|  | **Registry - JSR** | **Registry - NPM** | **Remote Import** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | [✔️ `node_modules`](https://jsr.io/docs/npm-compatibility) | [✔️ Specifier `npm:`](https://bun.sh/docs/runtime/autoimport) | ❌ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | [✔️ `node_modules`](https://jsr.io/docs/with/cloudflare-workers) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |
| **[Deno](https://deno.land/)** >= v1.42.0 | [✔️ Specifier `jsr:`](https://jsr.io/docs/with/deno) | [✔️ Specifier `npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) | [✔️](https://docs.deno.com/runtime/manual/basics/modules/#remote-import) |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | [✔️ `node_modules`](https://jsr.io/docs/with/node) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |

> **ℹ️ Note**
>
> It is possible to use this module in other methods/ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

- **JSR:**
  ```
  @hugoalh/underscore-path
  ```
- **NPM:**
  ```
  @hugoalh/underscore-path
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### #️⃣ Remote Import Paths

- **GitHub Raw:** (Require Tag)
  ```
  https://raw.githubusercontent.com/hugoalh-studio/underscore-path-es/${Tag}/mod.ts
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.

### 🛡️ Permissions

*This module does not require any permission.*

## 🧩 APIs

- ```ts
  function underscorePath(importMetaURL: string): UnderscorePathOutput;
  ```
- ```ts
  interface UnderscorePathOutput {
    __dirname: string;
    __filename: string;
  }
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/underscore-path)
