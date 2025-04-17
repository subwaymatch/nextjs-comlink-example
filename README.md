# Next.js 15 Comlink Examples

This project demonstrates how to use workers in Next.js via [Comlink](https://github.com/GoogleChromeLabs/comlink). Comlink makes it easy to work with web workers by providing a seamless API that abstracts away the complexities of worker messaging.

## Examples

This repository contains three different examples of using Comlink with Next.js:

1. Basic Comlink Example

A simple example showing how to use Comlink to communicate with a web worker. This demonstrates the fundamental setup and usage patterns.

2. Singleton Worker Example

Demonstrates how to implement a singleton pattern with web workers using Comlink. This ensures that only one worker instance is shared across multiple references, making all operations affect the same state.

3. Non-Singleton Worker Example

Shows how to create separate worker instances for independent operation. Unlike the singleton example, changes in one worker don't affect others.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
