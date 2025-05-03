import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../src/form.css"; 

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");

    try {
      const response = await axios.get("http://localhost:3001/users");
      console.log("Fetched users:", response.data);

      const user = response.data.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.password === password
      );

      if (user) {
        console.log("Login successful");
        navigate("/table");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Failed to login. Please check the backend server.");
    }
  };

  return (
    <div className="login-container">
      <div style={{ padding: "20px" }}>
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "8px", margin: "10px" }}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
            required
          />
          <br />
          <button type="submit" style={{ padding: "10px 20px", margin: "10px" }}>
            Login
          </button>
        </form>

        <p>Don't have an account?</p>
        <button
          onClick={() => navigate("/register")}
          style={{ padding: "10px 20px" }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Loginform;
