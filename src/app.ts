import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'rpg-aiapp',
  });
});

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    name: 'rpg-aiapp',
    version: '1.0.0',
    description: 'RPG AI Application Service',
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found',
  });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error occurred',
  });
});

export { app };
