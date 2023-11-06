import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Mahasiswa from "./MahasiswaModel.js";

const { DataTypes } = Sequelize;

const Dosenwali = db.define(
  "dosenwali",
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },

    NIP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
      references:{
        model:Mahasiswa,
        key: 'iddosen',
      }
    },
    nama: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },

    alamat: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },

    notelepon: {
      type: DataTypes.BIGINT,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    fakultas: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    departemen: {
      type: DataTypes.STRING,

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

Users.hasMany(Dosenwali);
Dosenwali.belongsTo(Users, { foreignKey: "email" });


export default Dosenwali;
