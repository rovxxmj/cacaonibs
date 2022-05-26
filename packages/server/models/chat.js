const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Chat extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        content: {
          type: DataTypes.TEXT, // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
        },
      },
      {
        modelName: "Chat",
        tableName: "Chats",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Chat.belongsTo(db.User);
    db.Chat.belongsTo(db.Room);
    db.Chat.hasMany(db.Image);
  }
};
