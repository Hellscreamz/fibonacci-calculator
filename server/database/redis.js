
const redis = require("redis");
const keys = require("../config/keys");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const redisPublisher = redisClient.duplicate();

function setupRedis() {
  // Optional setup logic for Redis if needed
}

module.exports = {
  redisClient,
  redisPublisher,
  setupRedis,
};
