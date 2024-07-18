# Vue Monorepo template

## Technologies

- nodejs >= 20
- pnpm >= 9
- vue >= 3
- typescript
- eslint
- prettier
- Python (for pre-commit)

## Setup dev env

1. Install `python 3.9+` [Downloads](https://www.python.org/downloads/)
1. Install `nodejs 20.11.0+` [Downloads](https://nodejs.org)
1. For windows run script `./scripts/setup.ps1`

## Use HOT-RELOAD for app with library

For example you want to use components from `lib-template` in `app-template`

1. In one shell start watch process for `lib-template`

```shell
pnpm watch:lib-template
```

1. In other shell start app dev process

```shell
pnpm dev:app-template
```

## How to add package

1. Copy-paste `lib-package` and rename to `some-lib`
1. Change `name` in `/packages/some-lib/package.json` to `@example/some-lib`
1. Add scripts `dev`, `build`, `watch`, `preview` to `/packages/some-lib/package.json`
1. Add scripts to root `package.json`

```
...
"scripts": {
    ...
    "dev:some-lib": "pnpm --filter @example/some-lib dev",
    "build:some-lib": "pnpm --filter @example/some-lib build && pnpm install",
    "watch:some-lib": "pnpm build:some-lib && pnpm --filter @example/some-lib watch"
}
...

```

1. Update already created scripts `dev`, `build`, `watch` in root `package.json`

## How to add DEV dependency to all workspaces (all packages and apps)

```shell
pnpm add -D -w dependency
```

## How to add dependency to specified package

To control dependencies version `catalog` feature from PNPM is used

Read more https://pnpm.io/catalogs

1. Add new dependency to `.pnpm-workspace.yaml` catalog

```yaml
packages:
    - 'packages/*'
    - 'apps/*'

catalog:
    vue: '^3.0.0'
```

2. Add new dependency with `catalog:` version specifier to `some-lib/packages.json`

```json
{
    "dependencies": {
        "vue": "catalog:"
    }
}
```

3. Run `pnpm install`
