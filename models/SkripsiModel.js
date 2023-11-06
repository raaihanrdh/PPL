import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Skripsi = db.define(
  "skripsi",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    nilaiskripsi: {
      type: DataTypes.INTEGER,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jadwalsidang: {
      type: DataTypes.DATE,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    NIM: {
      type: DataTypes.INTEGER,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Skripsi;
