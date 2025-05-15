import React, { use } from "react";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        const lastSignIn = {
          email,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };
        fetch("https://coffee-store-server-roan-seven.vercel.app/users", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(lastSignIn),
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
        <h1 className="text-3xl text-center">Login Now</h1>
        <form onSubmit={handleLogin} className="fieldset">
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

export default Login;
