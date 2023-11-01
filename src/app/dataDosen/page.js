import React from 'react';
import { Sidebar } from '../Component/sidebar';
const DataDosen = () => {
  return (
    <div>
      <div className="flex-1">
        <div className="flex items-center justify-center bg-gray-200 min-h-screen">
          <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-12 h-full">
            <h1 className="text-4xl font-semibold text-black mb-9 text-center">DATA DOSEN</h1>
            <div className="mb-4">
              <input
                type="text"
                className="w-min px-3 py-2 border rounded-md bg-white"
                placeholder="Cari Dosen..."
              />
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full border-black">
                <thead>
                  <tr className="bg-gray-400 text-black border">
                    <th className="border p-2">NO</th>
                    <th className="border p-2">Nama</th>
                    <th className="border p-2">NPWP</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Jabatan</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Masukkan data dosen sesuai kebutuhan */}
                  <tr className="border">
                    <td className="p-2 text-xl text-black text-center">1</td>
                    <td className="p-2 text-xl text-black text-center">
                      John Doe
                      <br />
                      <a className="link link-primary text-center" href="#">
                        Mahasiswa
                      </a>
                    </td>
                    <td className="p-2 text-xl text-black text-center">9876543210</td>
                    <td className="p-2 text-xl text-black text-center">Aktif</td>
                    <td className="p-2 text-xl text-black text-center">Dosen</td>
                    <td className="p-2 flex items-center justify-center">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Reset</button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                    </td>
                  </tr>
                  {/* Tambahkan data dosen lainnya di sini */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDosen;
