import { createClient } from 'redis';
import express from 'express';
import { promisify } from 'util';

//create express server on port 1245
const app = express();

//create redis client
const redisClient = createClient();

redisClient.on('connect', function() {
  console.log('Redis client connected to the server');
});

redisClient.on('error', function (err) {
  console.log(`Redis client not connected to the server: ${err}`);
});
