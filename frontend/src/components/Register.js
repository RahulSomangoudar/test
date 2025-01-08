import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
          Register
        </button>
      </form>
      {message && <p style={{ marginTop: "10px", color: message === "Registration successful!" ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default Register;
