import React from 'react';

const GenerateAcc = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-10">
        <h1 className="text-3xl font-semibold text-black mb-9 text-center">ENTRY DATA MAHASISWA</h1>

        <div className="grid grid-cols-2 gap-7 w-full">
          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="nama">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Nama"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="nim">
                NIM
              </label>
              <input
                type="text"
                id="nim"
                placeholder="NIM"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="angkatan">
                Angkatan
              </label>
              <input
                type="text"
                id="angkatan"
                placeholder="Angkatan"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="fakultas">
                Fakultas
              </label>
              <input
                type="text"
                id="fakultas"
                placeholder="Fakultas"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="prodi">
                Prodi
              </label>
              <input
                type="text"
                id="prodi"
                placeholder="Prodi"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="status">
                Status
              </label>
              <input
                type="text"
                id="status"
                placeholder="Status"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-black mb-1" htmlFor="doswal">
                Dosen Wali
              </label>
              <input
                type="text"
                id="email-university"
                placeholder="Email University"
                className="input input-bordered w-full bg-white border-black text-black p-2"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="btn btn-primary">Simpan Data</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateAcc;
