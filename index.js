const fs = require("fs");

const wasmBuffer = fs.readFileSync("./dist/test.wasm");
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum);
});
