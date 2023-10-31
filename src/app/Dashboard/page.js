import React from 'react'

const page = () => {
  return (
    
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
        <th>1</th>
        <td>Muhammad Raihan Ridho</td>
        <td>24060121140131</td>
        <td>Aktif</td>
        <td>2021</td>
        <td>
        <button className="transition duration-150 ease-in-out ...">Edit</button>
        

            </td>
      </tr>
      <tr>
        <th>2</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

      </tr>
      <tr>
        <th>3</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default page