const express = require('express');
const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

redisClient.on('connect', function() {
  console.log('Connected to Redis');
});

// The 'testEvent' is a placeholder for a real event that the application would subscribe to.
// It is used here as an example of how to subscribe to an event with Redis.
redisClient.subscribe('testEvent');

app.get('/', (req, res) => {
  res.send('Express.js server is running!');
});

app.listen(port, () => {
  console.log(`Express.js server is listening at http://localhost:${port}`);
});