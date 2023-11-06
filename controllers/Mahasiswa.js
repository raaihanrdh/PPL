import Mahasiswa from "../models/MahasiswaModel.js";
import User from "../models/UserModel.js";

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

export const createUserMhs = async (req, res) => {
  const {
    NIM,
    nama,
    alamat,
    email,
    angkatan,
    notelepon,
    prodi,
    fakultas,
    departemen,
    status,
    iddosen,
  } = req.body;
  try {
    const randomPassword = generateRandomPassword(12);
    const user = await User.create({
      nama: nama,
      email: email,
      password: randomPassword,
      role: "mahasiswa",
    });
    const mahasiswa = await Mahasiswa.create({
      NIM: NIM,
      nama: nama,
      alamat: alamat,
      email: email,
      prodi: prodi,
      angkatan: angkatan,
      notelepon: notelepon,
      fakultas: fakultas,
      departemen: departemen,
      status: status,
      iddosen: iddosen,
    });
    console.log("isi data", req.body);
    res.status(201).json({ msg: "Register Berhasil", mahasiswa, user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// export const updateUser = async (req, res) => {
//   const { id } = req.params; // Mendapatkan ID pengguna dari parameter URL
//   const { name, email, role } = req.body; // Mendapatkan data yang akan diupdate dari body request

//   try {
//     // Mencari pengguna berdasarkan ID
//     const user = await User.findOne({ where: { uuid: id } });

//     // Jika pengguna tidak ditemukan, kembalikan respons 404 Not Found
//     if (!user) {
//       return res.status(404).json({ msg: "User tidak ditemukan" });
//     }

//     // Memperbarui data pengguna
//     user.name = name || user.name; // Jika name tidak disediakan, gunakan nilai yang ada
//     user.email = email || user.email; // Jika email tidak disediakan, gunakan nilai yang ada
//     user.role = role || user.role; // Jika role tidak disediakan, gunakan nilai yang ada

//     // Simpan perubahan ke database
//     await user.save();

//     // Mengembalikan respons sukses
//     res.status(200).json({ msg: "User berhasil diperbarui", user });
//   } catch (error) {
//     // Jika terjadi kesalahan, kirimkan respons 500 Internal Server Error
//     res.status(500).json({ msg: error.message });
//   }
// };

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
