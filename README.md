# tsnode-compile-issue
shows compile issues between tsc and ts-node using > es6


# steps to reproduce
- clone the repo
- run `yarn install`
- run `yarn build`

you'll see no errors...

- run `yarn test`

you'll see compile errors from ts-node

```
tsnode-compile-issue\src\code-list.logic.ts:12
        CodeListLogic.cache[key] = list ?? {};
                                         ^

SyntaxError: Unexpected token '?'
```