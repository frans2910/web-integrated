export default function handler(req, res) {
  const { name = 'World' } = req.query;

  res.status(200).json({
    success: true,
    message: `Halo, ${name}! Serverless function Vercel berjalan dengan lancar.`,
    endpoint: '/api/hello',
    timestamp: new Date().toISOString()
  });
}
