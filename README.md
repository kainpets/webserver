# Web Server Project

A TypeScript-based Node.js web server with multiple server implementations.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the TypeScript files:
   ```bash
   npm run build
   ```

3. Start the development server (with watch mode):
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start the basic echo server (port 1234)
- `npm run start:async` - Start the async echo server (port 1234)
- `npm run start:promise` - Start the promise-based echo server (port 1234)
- `npm run start:web` - Start the Express web server (port 3000)
- `npm run dev` - Watch mode for TypeScript compilation
- `npm run clean` - Remove compiled files
- `npm test` - Run tests (not configured yet)

## Project Structure

```
webserver/
├── src/
│   └── index.ts          # Express web server
├── echo_server.ts        # Basic TCP echo server
├── echo_server_async.ts  # Async TCP echo server
├── echo_server_promise.ts # Promise-based TCP echo server
├── dist/                 # Compiled JavaScript files
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project configuration
└── README.md            # This file
```

## Server Types

### TCP Echo Servers (Port 1234)
- **Basic Echo Server** (`npm start`) - Simple TCP echo server
- **Async Echo Server** (`npm run start:async`) - Async/await implementation
- **Promise Echo Server** (`npm run start:promise`) - Promise-based implementation

### Web Server (Port 3000)
- **Express Server** (`npm run start:web`) - REST API with health check

## API Endpoints (Web Server)

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

The web server runs on port 3000 by default, or you can set a custom port using the `PORT` environment variable.

