import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ userName: "", text: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);

  const handleEditClick = (commentId) => {
    const commentToEdit = comments.find((comment) => comment._id === commentId);
    setNewComment({
      userName: commentToEdit.userName,
      text: commentToEdit.text,
    });
    setEditingCommentId(commentId);
  };

  useEffect(() => {
    fetchPlaceAndComments();
  }, [id, trigger]);

  const fetchPlaceAndComments = async () => {
    try {
      const placeResponse = await axios.get(`${API_URL}/api/places/${id}`);
      setPlace(placeResponse.data);
      const commentsResponse = await axios.get(
        `${API_URL}/api/places/${id}/comments`
      );
      setComments(commentsResponse.data);
      setLoading(false);
    } catch (error) {
      console.error(error); // Log the error for debugging
      setError("Error fetching place and comments.");
      setLoading(false);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCommentId) {
        // If editing, send a PUT request to update the comment
        await axios.put(
          `${API_URL}/api/places/${id}/comments/${editingCommentId}`,
          newComment
        );
      } else {
        // If adding new comment, send a POST request
        await axios.post(`${API_URL}/api/places/${id}/comments`, newComment);
      }
      setNewComment({ userName: "", text: "" });
      setEditingCommentId(null);
      setTrigger(!trigger); // Update trigger state first
      fetchPlaceAndComments(); // Then fetch the updated comments
    } catch (error) {
      setError("Error adding or editing comment.");
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(`${API_URL}/api/places/${id}/comments/${commentId}`);
      setTrigger(!trigger); // Update trigger state first
      fetchPlaceAndComments(); // Then fetch the updated comments
    } catch (error) {
      setError("Error deleting comment.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="touSoAver">
      <h1>{place.name}</h1>
      <div>
        <section>
          <h3>
            Type:{" "}
            {Array.isArray(place.type) ? place.type.join(", ") : place.type}
          </h3>
          <h3>Address: {place.address}</h3>
          <h3>Rating: {place.rating}</h3>
          <h3>Price Level: {place.priceLevel}</h3>
          <h3>Phone: {place.phone}</h3>
          <h3>Email: {place.email}</h3>
          <div>
            {comments.length > 0 &&
              comments.map((comment) => (
                <div key={comment._id}>
                  <p>
                    <strong>{comment.userName}:</strong> {comment.text}
                    <button onClick={() => handleEditClick(comment._id)}>
                      edit
                    </button>
                    <button onClick={() => handleCommentDelete(comment._id)}>
                      delete
                    </button>
                  </p>
                </div>
              ))}
          </div>
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Your Name"
              value={newComment.userName}
              onChange={handleCommentChange}
              required
            />
            <textarea
              name="text"
              placeholder="Your Comment"
              value={newComment.text}
              onChange={handleCommentChange}
              required
            ></textarea>
            <button type="submit">Add Comment</button>
          </form>
          <Link to="/places">
            <button>
              <span>Back</span>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default PlaceDetails;
