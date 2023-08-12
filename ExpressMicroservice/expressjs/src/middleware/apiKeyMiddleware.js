const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  // Check if the API key matches the expected value
  if (apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = apiKeyMiddleware;