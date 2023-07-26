const fs = require("fs");

const wasmBuffer = fs.readFileSync("./dist/test.wasm");

const importObject = {
  console: {
    log(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiate(wasmBuffer, importObject).then((wasmModule) => {
  const { add, logIt } = wasmModule.instance.exports;
  const sum = add(7, 6);
  console.log(sum);
  logIt();
});
