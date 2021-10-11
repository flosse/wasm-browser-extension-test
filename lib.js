const WASM_LIB_URL = chrome.runtime.getURL("lib.wasm");

fetch(WASM_LIB_URL)
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(results => {
    instance = results.instance;
    const result = instance.exports.add(41,1);
    console.log(result);
  })
  .catch(console.error);
