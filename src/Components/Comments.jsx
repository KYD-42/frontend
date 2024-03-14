import React, { useState } from 'react';
import EditComment from './EditComment';

function Comments() {
    const [comments, setComments] = useState([
        { id: 1, text: 'This is the first comment' },
        { id: 2, text: 'This is the second comment' },
        // More comments here...
    ]);

    function updateComment(updatedComment) {
        setComments(comments.map(comment =>
            comment.id === updatedComment.id ? updatedComment : comment
        ));
    }

    return (
        <div>
            {comments.map(comment => (
                <EditComment key={comment.id} comment={comment} updateComment={updateComment} />
            ))}
        </div>
    );
}

export default Comments;
