import React, { use } from "react";
import AuthContext from "../Context/AuthContext";

const Register = () => {
  const { registerUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());
    const userProfile = { email, ...rest };

    registerUser(email, password)
      .then((res) => {
        console.log(res.user);
        //send rest into to db
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mt-52 mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center">Sign Up Now</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            type="number"
            name="phone"
            className="input"
            placeholder="Phone"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
