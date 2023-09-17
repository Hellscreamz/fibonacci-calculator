const express = require("express");
const router = express.Router();

const { redisClient, redisPublisher } = require("../database/redis");
const { pgClient } = require("../database/pg");

router.get("/all", async (req, res) => {
  const values = await pgClient.query("SELECT * from values");
  res.send(values.rows);
});

router.get("/current", async (req, res) => {
  redisClient.hgetall("values", (err, values) => {
    res.send(values);
  });
});

router.post("/", async (req, res) => {
  const index = req.body.index;

  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high");
  }

  redisClient.hset("values", index, "Nothing yet!");
  redisPublisher.publish("insert", index);
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

  res.send({ working: true });
});

module.exports = router;
