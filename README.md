## Librsync binding for NodeJS.

Initially based on the [`node-rdiff` package](https://www.npmjs.com/package/node-rdiff).

## What's new

-   dependencies are precompiled and bundled;
-   added support for Windows (x64);
-   added Promise-based functions;
-   removed compilation warnings;
-   upgraded dependencies.

## Example

The sync api:

```js
// a new file contains "hello"
var a = "a.txt";

// a file contains "hello world"
var b = "b.txt";

// `a` wants to be `b`

rdiff.signatureSync(a, a + ".sig");
rdiff.deltaSync(a + ".sig", b, a + ".delta");

// the `a.patched` contains "hello world"
rdiff.patchSync(a, a + ".delta", a + ".patched");
```

The same using the async api:

```js
rdiff.signature(a, a + ".sig", function (err) {
    rdiff.delta(a + ".sig", b, a + ".delta", function (err) {
        rdiff.patch(a, a + ".delta", a + ".patched", function (err) {
            // yeah! contents of `a` should equal contents of `a.patched`
        });
    });
});
```
