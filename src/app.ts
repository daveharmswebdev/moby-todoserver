import express from 'express';
import healthRouter from './routes/health';

const app = express();

app.use(healthRouter);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app;