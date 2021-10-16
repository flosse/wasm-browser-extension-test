const worker = new Worker(chrome.runtime.getURL('worker.js'));

fetch(chrome.runtime.getURL("lib.wasm"))
  .then(response => response.arrayBuffer())
  .then(wasm_bytes => worker.postMessage(wasm_bytes, [wasm_bytes]))
