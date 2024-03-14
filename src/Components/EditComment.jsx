// EditComment.jsx
import React, { useState } from 'react';

function EditComment(props) {
    const [commentEdited, setCommentEdited] = useState({
        id: props.comment.id,
        text: props.comment.text,
    });

    function commentEdit(e) {
        const { name, value } = e.target;
        setCommentEdited(prevState => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.updateComment(commentEdited);
    }

    if (!props.comment) return null; // Add a check for null or undefined comment

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={commentEdited.text}
                onChange={commentEdit}
            />
            <button type="submit">Update Comment</button>
        </form>
    );
}

export default EditComment;