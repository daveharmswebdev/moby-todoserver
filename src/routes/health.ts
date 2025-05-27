import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    healthy: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

export default router;