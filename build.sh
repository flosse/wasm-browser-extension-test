#!/bin/sh

rustc --target wasm32-unknown-unknown -O --crate-type=cdylib -C lto=thin -C opt-level=z -C panic=abort src/lib.rs -o lib_bg.wasm
wasm-opt -Os lib_bg.wasm -o lib.wasm
