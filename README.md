# Can we build browser extensions with WASM?

[WASM](https://webassembly.org/) is [supported by all mayor browsers](https://caniuse.com/wasm).
Also building [Browser Extensions](https://browserext.github.io/charter/) with WASM modules
should (theoretically) work.
Unfortunately, this does not seem to be the case.

Using this extension with Chrome/Chromium (`v93.x`)
while opening a website like https://news.ycombinator.com/
leads to this error

![](error.png)

although `'wasm-eval'` is set in `content_security_policy` (within `manifest.json`).

**Is there a solution or do we have to say goodbye to the idea of using WASM in browser extenstions?**
