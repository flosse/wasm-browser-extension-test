console.log("Run content script");

const WASM_LIB_URL = chrome.runtime.getURL("lib.wasm");

console.log("Load WASM module");

fetch(WASM_LIB_URL)
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(results => {
    console.log("Successfully instantiated WASM module");
    instance = results.instance;
    console.log("Invoke 'add' function of WASM module");
    const result = instance.exports.add(41,1);
    console.log(result);
  })
  .catch(console.error);
