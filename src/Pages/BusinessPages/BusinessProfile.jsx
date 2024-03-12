import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import SERVER from '../../../data/server';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

const API = SERVER();

function BusinessProfile() {
    const { user, isLoggedIn } = useContext(AuthContext);
    const [busUser, setBusUser] = useState({}); // Deixei busUser como Business User - DANI
    useEffect(() => {
        if (isLoggedIn) {
            axios
                .get(`${API}/api/business/${user._id}`)
                .then((response) => {
                    setRegUser(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [isLoggedIn, business._id]); //verificar este business._id no postman

    return (
        <section className="user-profile">
            {isLoggedIn && regUser ? (
                <div className="touSoAver">
                    <h1>Business Profile</h1>
                    <h3>{busUser.companyName} </h3> {/* FALTA ADICIONAR O RESTO DAS INFOS. TESTAR PRIMEIRO */}
                    </div>
            ) : (
                <h2>Please Log In to see your profile</h2> 
            )}
        </section>
    );
}

export default BusinessProfile;
