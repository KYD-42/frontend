import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://backend-g5k3.onrender.com";

function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    photo: "",
    bio: "",
    petName: "",
    petType: "",
    petAge: "",
    petBreed: "",
    petPhoto: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/signup`, formData)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="touSoAver" style={{ marginTop: "300px" }}>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={formData.userName}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          autoComplete="off"
        />

       {/*  <label htmlFor="photo">Photo</label>
        <input
          type="file"
          name="photo"
          id="photo"
          value={formData.photo}
          onChange={handleChange}
          autoComplete="off"
        /> */}

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          value={formData.bio}
          onChange={handleChange}
          autoComplete="off"
        />

      {/*   <label htmlFor="petPhoto">Pet Photo</label>
        <input
          type="file"
          name="petPhoto"
          id="petPhoto"
          value={formData.petPhoto}
          onChange={handleChange}
          autoComplete="off"
        /> */}
        <label htmlFor="petName">Pet Name</label>
        <input
          type="text"
          name="petName"
          id="petName"
          value={formData.petName}
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="petType">Pet Type</label>
        <select
          id="petType"
          name="petType"
          value={formData.petType}
          onChange={handleChange}
          autoComplete="off"
        >
          <option value="">Select Pet Type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="petAge">Pet Age</label>
        <input
          type="number"
          name="petAge"
          id="petAge"
          value={formData.petAge}
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="petBreed">Pet Breed</label>
        <input
          type="text"
          name="petBreed"
          id="petBreed"
          value={formData.petBreed}
          onChange={handleChange}
          autoComplete="off"
        />

        <button type="submit">Create Account</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to={"/login"}> Log in</Link>
    </div>
  );
}

export default SignUp;