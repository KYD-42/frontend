import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";

function UserProfile() {
  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <section className="touSoAver">
      {isLoggedIn && user ? (
        <div className="touSoAver">
          <h1>User Profile</h1>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Photo:</strong>{user.photo}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Pet Name:</strong> {user.petName}</p>
          <p><strong>Pet Age:</strong> {user.petAge}</p>
          <p><strong>Pet Breed:</strong> {user.petBreed}</p>
          <p><strong>Pet Type:</strong> {user.petType}</p>
        </div>
      ) : (
        <h2>Please Log In to see your profile</h2>
      )}
    </section>
  );
}

export default UserProfile;
