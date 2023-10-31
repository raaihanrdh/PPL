// PageIRS.js
import React from "react";
import Layout from './path-to-your-layout/layout'; // Gantilah dengan path yang sesuai

const PageIRS = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>NIM</th>
                <th>Status</th>
                <th>Angkatan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Muhammad Raihan Ridho</td>
                <td>24060121140131</td>
                <td>Aktif</td>
                <td>2021</td>
                <td>
                  <button className="transition duration-150 ease-in-out ...">Edit</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* tambahkan baris tambahan di sini jika diperlukan */}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default PageIRS;
