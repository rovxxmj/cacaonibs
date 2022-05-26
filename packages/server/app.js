require("dotenv/config");

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { sequelize } = require("./models");
const app = express();
app.set("PORT", process.env.PORT || 8001);
sequelize.sync().then(() => console.log("✅ DB is connected."));

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);
app.use(express.static(path.join(__dirname, "/public")));

app.listen(app.get("PORT"), () =>
  console.log(`✅ Server is on! -p ${app.get("PORT")}`)
);
