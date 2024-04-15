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

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0 / >= v1.41.1 (For JSR Only)
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/underscore-path[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/underscore-path[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/underscore-path[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/underscore-path[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/underscore-path";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/underscore-path[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/underscore-path[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/underscore-path[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/underscore-path[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/underscore-path";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/underscore-path[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    /* Via GitHub Raw (Require Tag) */
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/underscore-path-es/${Tag}/mod.ts";
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

## 🧩 API

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
