## ABOUT

- Javascript is a single threaded language that is non-blocking

- Javascript Engine contains 2 parts:
-    Memory Heap: Where memory allocation happens
-    Call Stack: Where code is read and executed

```js
const a = 1; // this all gets allocated into the memory heap
const b = 10;
const c = 100;
```

- The problem with global variables like these is that they take up memory and if we forget to clean them out if not used, they'll sit there forever.

