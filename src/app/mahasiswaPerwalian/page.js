import React from 'react';

const DataMahasiswa = () => {
  return (
    <div className="grid desktop:grid-cols-1">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-primary btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <div className="flex px-2 mx-2 text-3xl font-bold">SISTEM AKADEMIK </div>
          </div>
          <div className="drawer-side bg">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center bg-gray-200 min-h-screen">
          <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-12 h-full">
            <h1 className="text-4xl font-semibold text-black mb-9 text-center">Mahasiswa Perwalian</h1>
            <div className="mb-4">
              <input
                type="text"
                className="w-min px-3 py-2 border rounded-md bg-white text-black"
                placeholder="Cari Mahasiswa..."
              />
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full border-black">
                <thead>
                  <tr className="bg-gray-400 text-black border">
                    <th className="border p-2">NO</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">NIM</th>
                    <th className="border p-2">Angkatan</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Total SKS</th>
                    <th className="border p-2">IRS</th>
                    <th className="border p-2">PKL</th>
                    <th className="border p-2">Skripsi</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="p-2 text-xl text-black">1</td>
                    <td className="p-2 text-xl text-black">Muhammad Raihan Ridho</td>
                    <td className="p-2 text-xl text-black">24060121140131</td>
                    <td className="p-2 text-xl text-black">2021</td>
                    <td className="p-2 text-xl text-black">Aktif</td>
                    <td className="p-2 text-xl text-black">120</td>
                    <td className="p-2 text-xl text-black">Belum</td>
                    <td className="p-2 text-xl text-black">Belum</td>
                    <td className="p-2 flex gap-2"></td>
                    <td className="p-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">view</button>
                
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMahasiswa;
