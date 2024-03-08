import React, { useState } from "react";
import axios from "axios";
import SERVER from '../../data/server';

const server = SERVER;

function UserCreate() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petPhoto, setPetPhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        userName,
        firstName,
        lastName,
        email,
        password,
        phone,
        age,
        photo,
        bio,
        petType,
        petAge,
        petBreed,
        petPhoto,
      };

      const response = await axios.post("/api/users", newUser);

      console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <section className="formBg">
      <div className="pageContainer">
        <div className="createCard">
          <h1>Create Your Account</h1>
          <form onSubmit={handleSubmit}>
            <section className="nameInput">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={userName}
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>First Name:</label>
              <input
                type="text"
                name="firstname"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastname"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={age}
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Photo:</label>
              <input
                type="text"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Bio:</label>
              <input
                type="text"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Pet Type:</label>
              <input
                type="text"
                name="petType"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Pet Age:</label>
              <input
                type="number"
                name="petAge"
                value={petAge}
                onChange={(e) => setPetAge(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Pet Breed:</label>
              <input
                type="text"
                name="petBreed"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
              />
            </section>
            <section className="nameInput">
              <label>Pet Photo:</label>
              <input
                type="text"
                name="petPhoto"
                value={petPhoto}
                onChange={(e) => setPetPhoto(e.target.value)}
              />
            </section>
            <section className="butonsInput">
              <button type="submit">Submit</button>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserCreate;
