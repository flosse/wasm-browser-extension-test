self.addEventListener("message", handleMessageFromMainThread, false);

function handleMessageFromMainThread(event) {
  WebAssembly.instantiate(event.data)
  .then(resultObject => {
    console.log("Invoke 'add' function of WASM module");
    console.log(resultObject.instance.exports.add(41,1));
  })
  .catch(console.error);
}
