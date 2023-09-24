## Native librsync binding for NodeJS.

Initially based on the [`node-rdiff` package](https://www.npmjs.com/package/node-rdiff).

## Platforms supported

-   Linux (x64): YES
-   Windows (x64): YES
-   MacOS: Not yet, planned (should not be hard to add).

## Example

### The synchronous api:

The synchronous API is composed of the functions with `*Sync` suffix:

```js
var a = "a.txt"; // Contains "hello".
var b = "b.txt"; // Contains "hello world".

// Compute difference from `a` to `b`.
rdiff.signatureSync(a, `${a}.sig`);
rdiff.deltaSync(`${a}.sig`, b, `${a}.delta`);

// Patch `a` so that it becomes equal to `b`.
rdiff.patchSync(a, `${a}.delta`, `${a}.patched`);
```

### The callback async api:

```js
rdiff.signature(a, `${a}.sig`, function (err) {
    rdiff.delta(`${a}.sig`, b, `${a}.delta`, function (err) {
        rdiff.patch(a, `${a}.delta`, `${a}.patched`, function (error) {
            if (error) {
                return console.error(error);
            }

            // File `a.patched` now equals `b`.
        });
    });
});
```

### The promise async api (recommended):

```js
await rdiff.signatureAsync(a, `${a}.sig`);
await rdiff.deltaAsync(`${a}.sig`, b, `${a}.delta`);
await rdiff.patchAsync(a, `${a}.delta`, `${a}.patched`);
// `a` should equal `a.patched`
```
