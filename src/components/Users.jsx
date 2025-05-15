import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const users = useLoaderData();
  const [user, setUser] = useState(users);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-roan-seven.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = user.filter((item) => item._id !== id);
              setUser(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item._id}>
              <th>{item.name}</th>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <th className="space-x-3">
                <button className="btn btn-sm border border-white">V</button>
                <button className="btn btn-sm border border-white">E</button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-sm border border-white"
                >
                  X
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
