import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  const [user, setUser] = useState(users);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item._id}>
              <th>{item.name}</th>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
