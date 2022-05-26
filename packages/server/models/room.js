const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Channel extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        private: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        thumbnailImageUrl: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        modelName: "Room",
        tableName: "Rooms",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Room.hasMany(db.Chat, { as: "Chats" });
    db.Room.belongsToMany(db.User, {
      through: "RoomMembers",
      as: "Members",
    });
  }
};
