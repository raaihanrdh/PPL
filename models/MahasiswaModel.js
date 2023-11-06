import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Mahasiswa = db.define(
  "mahasiswa",
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true,
      validate: {
        notEmpty: true,
      },
    },

    NIM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      validate: {
        notEmpty: true,
      },
    },
    nama: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },

    fakultas: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    prodi: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    angkatan: {
      type: DataTypes.INTEGER,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    tempatlahir: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    tanggallahir: {
      type: DataTypes.DATE,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    NIK: {
      type: DataTypes.INTEGER,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    status: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    kotaasal: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    alamat: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING,

      allowNull: true,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },

    notelepon: {
      type: DataTypes.BIGINT,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    jalurmasuk: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    iddosen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
      
    },
  },
  {
    freezeTableName: true,
  }
);
Users.hasMany(Mahasiswa, { foreignKey: "email" });
Mahasiswa.belongsTo(Users, { foreignKey: "email" });

export default Mahasiswa;
