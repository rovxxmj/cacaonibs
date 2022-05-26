const Sequelize = require("sequelize");

const room = require("./room");
const chat = require("./chat");
const user = require("./user");
const mention = require("./mention");
const image = require("./image");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Room = room;
db.Chat = chat;
db.User = user;
db.Mention = mention;
db.Image = image;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
