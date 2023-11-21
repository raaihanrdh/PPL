import Mahasiswa from "../models/MahasiswaModel.js";
import User from "../models/UserModel.js";
import axios from "axios";
import bcrypt from "bcryptjs";
import argon2 from "argon2";


export const getMahasiswa = async (req, res) => {
  try {
    const response = await Mahasiswa.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMahasiswaById = async (req, res) => {
  try {
    const response = await Mahasiswa.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUserMhs = async (req, res) => {
  const {
    NIM,
    nama,
    email,
    angkatan,
    status,
    iddosen,
    password,
  } = req.body;
  try {
    function generateRandomPassword(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      return password;
    }

    const randomPassword = generateRandomPassword(12);
    const hashedPassword = await argon2.hash(randomPassword);

    const user = await User.create({
      nama: nama,
      email: email,
      password: hashedPassword,
      role: "mahasiswa",
    }).then(async (user) => {
      const mahasiswa = await Mahasiswa.create({
        NIM: NIM,
        nama: nama,
        email: email,
        angkatan: angkatan,
        status: "aktif",
        iddosen: iddosen,
        islogin: 1
      });
      console.log("isi user", user);

      return mahasiswa;
    });
    res.status(201).json({ msg: "Register Berhasil", user, randomPassword });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateMhs = async (req, res) => {
  const { id } = req.params; // Mendapatkan ID pengguna dari parameter URL
  const { tempatlahir, tanggallahir, NIK, kotaasal, alamat, notelepon, jalurmasuk } = req.body; // Mendapatkan data yang akan diupdate dari body request

  try {
    const Mahasiswa = await Mahasiswa.findOne({ where: { uuid: id } });
    
    if (!mahasiswa) {
      return res.status(404).json({ msg: "Mahasiswa tidak ditemukan" });
    }

    // Memperbarui data pengguna
    mahasiswa.tempatlahir = tempatlahir || mahasiswa.tempatlahir; // Jika name tidak disediakan, gunakan nilai yang ada
    mahasiswa.tanggallahir = tanggallahir || mahasiswa.tanggallahir; // Jika email tidak disediakan, gunakan nilai yang ada
    mahasiswa.NIK = NIK || mahasiswa.NIK; // Jika role tidak disediakan, gunakan nilai yang ada

    // Simpan perubahan ke database
    await mahasiswa.save();

    // Mengembalikan respons sukses
    res.status(200).json({ msg: "Mahasiswa berhasil diperbarui", user });
  } catch (error) {
    // Jika terjadi kesalahan, kirimkan respons 500 Internal Server Error
    res.status(500).json({ msg: error.message });
  }
};

// export const deleteUser = async (req, res) => {
//   const { id } = req.params; // Mendapatkan ID pengguna dari parameter URL

//   try {
//     // Mencari pengguna berdasarkan ID
//     const user = await User.findOne({ where: { uuid: id } });

//     // Jika pengguna tidak ditemukan, kembalikan respons 404 Not Found
//     if (!user) {
//       return res.status(404).json({ msg: "User tidak ditemukan" });
//     }

//     // Menghapus pengguna dari database
//     await user.destroy();

//     // Mengembalikan respons sukses
//     res.status(200).json({ msg: "User berhasil dihapus" });
//   } catch (error) {
//     // Jika terjadi kesalahan, kirimkan respons 500 Internal Server Error
//     res.status(500).json({ msg: error.message });
//   }
// };
