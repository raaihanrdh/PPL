import React from 'react';
import Navbar from '../Component/navbar'

const dosenprofile = () => {
  return (
    <div className="flex-none h-screen bg-gray-300">
      <Navbar />
      <main>
        <div className="m-10 container mx-auto bg-gray">
          <h1 className="text-4xl font-semibold dark:text-black mt-5">Dosen Profile</h1>
          <div className="flex mt-10 gap-10 bg-gray-300">
            <div className="item-center">
              <div className="container bg-white p-4 rounded-lg text-center">
                <img src="image/profil.jpg" alt="profil" width={200} />
                <p className="font-semibold text-lg text-black">Nama: John Doe</p>
                <p className="font-semibold text-lg text-black">NIM: 1234567890</p>
                <div className="bg-gray-300 text-white px-4 py-2 rounded-md mt-2">Status</div>
              </div>
            </div>
                <div className="flex grow bg-white rounded-lg p-6">
                    <div className="mb-4">
                      <label className="label" htmlFor="nama">
                        <span className="label-text text-black text">Nama</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="nama" placeholder="NIP" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="NIP">
                        <span className="label-text">NIP</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="nim" placeholder="NIM" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="fakultas">
                        <span className="label-text">Fakultas</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="fakultas" placeholder="Fakultas" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="prodi">
                        <span className="label-text">Prodi</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="prodi" placeholder="Prodi" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="angkatan">
                        <span className="label-text">Angkatan</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="angkatan" placeholder="Angkatan" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="tempatLahir">
                        <span className="label-text">Tempat Lahir</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="tempatLahir" placeholder="Tempat Lahir" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="tanggalLahir">
                        <span className="label-text">Tanggal Lahir</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="tanggalLahir" placeholder="Tanggal Lahir" className="input input-bordered w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-4">
                      <label className="label" htmlFor="NIK">
                        <span className="label-text">NIK</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="NIK" placeholder="NIK" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="status">
                        <span className="label-text">Status</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="status" placeholder="Status" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="kotaAsal">
                        <span className="label-text">Kota Asal</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="kotaAsal" placeholder="Kota Asal" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="alamatAsal">
                        <span className="label-text">Alamat Asal</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="alamatAsal" placeholder="Alamat Asal" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="emailOfficial">
                        <span className="label-text">Email</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="email" placeholder="Email" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="noTelepon">
                        <span className="label-text">No Telepon</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="noTelepon" placeholder="No Telepon" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary">Save</button>
                        <button className="btn ml-3" >Edit</button>
                    </div>
                  </div>
                </div>
          </div>
      </main>
    </div>
  );
};

export default dosenprofile;
