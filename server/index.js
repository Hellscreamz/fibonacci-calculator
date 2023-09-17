const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const { setupDatabase } = require("./database/pg");
setupDatabase();

const { setupRedis } = require("./database/redis");
setupRedis();

const rootRoutes = require("./routes/routes");
const valuesRoutes = require("./routes/values");

app.use("/", rootRoutes);
app.use("/values", valuesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
