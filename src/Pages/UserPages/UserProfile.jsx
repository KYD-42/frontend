import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

const API_URL = "http://localhost:5005";

function UserProfile() {
    const { user, isLoggedIn } = useContext(AuthContext);


    return (
        <section className="touSoAver">
            {isLoggedIn && user? (
                <div className="touSoAver">
                    <h1>User Profile</h1>
                    <h3>{user.firstName} {user.lastName} {user.petType}</h3> {/* FALTA ADICIONAR O RESTO DAS INFOS. TESTAR PRIMEIRO */}
                </div>
            ) : (
                <h2>Please Log In to see your profile</h2> 
            )}
        </section>
    );
}

export default UserProfile;