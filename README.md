# rpg-aiapp

RPG AI Application Service - A backend API service for RPG AI applications.

## Features

- Express.js-based REST API
- TypeScript for type safety
- Jest for testing
- ESLint and Prettier for code quality

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:3000` by default.

## Building

Build the TypeScript code:

```bash
npm run build
```

## Running in Production

```bash
npm run build
npm start
```

## Testing

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## Linting

```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

## Formatting

```bash
npm run format        # Format code
npm run format:check  # Check formatting
```

## API Endpoints

### Health Check

```
GET /health
```

Returns the service health status.

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "rpg-aiapp"
}
```

### Service Info

```
GET /
```

Returns basic service information.

**Response:**

```json
{
  "name": "rpg-aiapp",
  "version": "1.0.0",
  "description": "RPG AI Application Service"
}
```

## Project Structure

```
rpg-aiapp/
├── src/
│   ├── app.ts       # Express application setup
│   └── index.ts     # Entry point
├── tests/
│   └── app.test.ts  # API tests
├── package.json
├── tsconfig.json         # Base TypeScript config (includes tests for IDE)
├── tsconfig.build.json   # Build-specific TypeScript config
├── jest.config.js
├── eslint.config.js
├── .prettierrc
└── README.md
```

## License

MIT