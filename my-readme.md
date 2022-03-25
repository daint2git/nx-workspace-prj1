# my readme

## api

```bash
npx nx serve api

npx nx build api

npx nx test api
```

## my-next-app-1

```bash
npx nx serve my-next-app-1

npx nx build my-next-app-1

npx nx test my-next-app-1

# help
npx nx serve my-next-app-1 --help
```

## graph

```bash
npx nx graph
```

## run multiple projects

```bash
npx nx run-many --target=build --projects=my-next-app-1,api
```

## Test Affected Projects

```bash
npx nx affected:apps

npx nx affected:libs

# The following are equivalent
npx nx affected --target=build
npx nx affected:build
```

## Clear the cache

```bash
npx nx reset
```
