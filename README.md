# Web Server Project

A simple Node.js web server built with Express.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Start the production server:
   ```bash
   npm start
   ```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload
- `npm test` - Run tests (not configured yet)

## Project Structure

```
webserver/
├── src/
│   └── index.js          # Main server file
├── package.json          # Project configuration
└── README.md            # This file
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

The server runs on port 3000 by default, or you can set a custom port using the `PORT` environment variable.

