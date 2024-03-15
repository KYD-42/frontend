import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const API_URL = "https://backend-g5k3.onrender.com";

function RegisterPlace() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [logo , setLogo ] = useState("")
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const [priceLevel, setPriceLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState(null);

  const handlePlaceCreate = (e) => {
    e.preventDefault();

    const reqBody = {
      logo,
      name,
      type,
      address,
      rating,
      priceLevel,
      phone,
      email,
    };
     const handleChange = async (e) => {
      //Create a new form data to put all the image info
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);
      try {
        //Send the upload request to the backend
        const response = await axios.post(`${API_URL}/api/upload`, uploadData);
        //The backend responds with the cloudinary image url
        setLogo(response.data.fileUrl);
      } catch (error) {
        console.log(error);
      }
    }; 

    axios
      .post(`${API_URL}/api/places`,  reqBody, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      } )
      .then(() => {
        navigate("/"); 
      })
      .catch((error) => {
        setError("Failed creating the place");
        console.log(error);
      });
  };

  return (
    <section>
      <div className="touSoAver">
        {isLoggedIn ? (
          <div>
            <h3>Register Your Place</h3>
            <form onSubmit={handlePlaceCreate}>
              <div>
                <label>Upload a photo</label>
                <input type="file" onChange={handleChange}/>
                </div>
              <div>
                <label>Name your Place:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Your type:</label>
                <input
                  type="text"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div>
                <label>Your location:</label>
                <input
                  type="text"
                  name="location"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label>Rating:</label>
                <input
                  type="text"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div>
                <label>Price Level:</label>
                <input
                  type="text"
                  name="priceLevel"
                  value={priceLevel}
                  onChange={(e) => setPriceLevel(e.target.value)}
                />
              </div>
              <div>
                <label>Your Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label>Your email:</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <button type="submit">Register Place</button>
            </form>
            {error && <p>{error}</p>}{" "}
          </div>
        ) : (
          <h3>Please Login to register your place</h3>
        )}
      </div>
    </section>
  );
}

export default RegisterPlace;