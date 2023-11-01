import React from 'react';
import Navbar from '../Component/navbar';
import Sidebar from '../Component/sidebar';

const EntryIrs = () => {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 h-screen bg-gray-300 mt-10 p-10">
          <div className="mt-10 container mx-auto">
            <h1 className="text-4xl flex flex-none font-semibold   dark:text-black mt-10" >Entry IRS</h1>
            <div className="flex flex-none mt-10 gap-10 item-center ">
                <div className="item-center">
                    <div className="bg-white p-4 rounded-lg text-center">
                        <img src="image/profil.jpg" alt="profil" width={200} />
                        <p className="font-semibold text-lg text-black">Nama: John Doe</p>
                        <p className="font-semibold text-lg text-black">NIM: 1234567890</p>
                        <div className="bg-gray-300 text-white px-4 py-2 rounded-md mt-2">Status</div>
                    </div>
                    </div>
                <div className="flex grow gap-10 bg-white border border-black shadow shadow-md p-6">
                  <div className="w-full h-full">
                    <div className="mb-4">
                      <label className="label" htmlFor="semesterStudi">
                        <span className="label-text text-black text">Semester Studi</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="semesterStudi" placeholder="IRS" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="totalSKSSemester">
                        <span className="label-text">Total SKS Semester</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="totalSKSSemester" placeholder="IRS" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="totalSKSKumulatif">
                        <span className="label-text">Total SKS Kumulatif</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="totalSKSKumulatif" placeholder="IRS" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="IPSemester">
                        <span className="label-text">IP Semester</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="IPSemester" placeholder="IRS" className="input input-bordered w-full" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="label" htmlFor="IPKSemester">
                        <span className="label-text">IPK Semester</span>
                      </label>
                      <div className="input-box">
                        <input type="text" id="IPKSemester" placeholder="IRS" className="input input-bordered w-full" />
                      </div>
                      <div className="mb-10"> </div>
                      <div className="flex mb-4 items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PDF,PNG, JPG, or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                        </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </main>
    </div>
  );
};

export default EntryIrs;