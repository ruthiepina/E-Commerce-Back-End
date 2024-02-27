const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

//* declare and initialize Tag model by extending from Sequelize's Model class
class Tag extends Model {}

Tag.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      tag_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "tag",
   }
);

module.exports = Tag;
