import React from 'react';

const MonitoringMahasiswa = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container px-4">
        <div className="border bg-white shadow-md rounded-lg p-10">
          <h1 className="text-4xl font-semibold text-black mb-3 text-center">DATA MAHASISWA</h1>
          <div className="flex gap-10 mt-12">
            <div className="flex flex-col items-center">
              <img src="image/profil.jpg" alt="profil" width={200} />
              <div className="bg-gray-300 text-white px-4 py-2 rounded-md mt-2">Status</div>
            </div>
            <table className="md:table-fixed text-black ">
              <tbody>
                <tr>
                  <td className="pr-6 pb-2"><strong>Nama</strong></td>
                  <td>Zairi</td>
                </tr>
                <tr>
                  <td className="pr-6 pb-2"><strong>NIM</strong></td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td className="pr-6 pb-2"><strong>SKS Kumulatif</strong></td>
                  <td>120</td>
                </tr>
                <tr>
                  <td className="pr-6 pb-2"><strong>IPK</strong></td>
                  <td>3.75</td>
                </tr>
                <tr>
                  <td className="pr-6 pb-2"><strong>NO. Telepon</strong></td>
                  <td>08888888888</td>
                </tr>
                <tr>
                  <td className="pr-6 pb-2"><strong>Email</strong></td>
                  <td>zairi@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringMahasiswa;
