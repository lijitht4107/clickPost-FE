import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AxiosInstants from "../../config/AxiosInstants";
import '../css/CommEnt.css'

function CommentArea({ id }) {
  // State variables
  const [comments, setComments] = useState('');
  const [newComment, setNewComment] = useState("");
  const { userDetails } = useSelector((state) => state.user);

  // Function to handle comment change
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  // Function to handle comment submission
  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      AxiosInstants.post(`/users/${id}/comments`, {
        comments: newComment.trim(),
        userId: userDetails.userId,
        userName: userDetails.userName,
        postId: id,
      })
        .then((response) => {
          console.log(response);

          //   setComments([...comments, newComment]);
          setNewComment(" ");
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    AxiosInstants.get(`/users/${id}/comments`)
      .then((response) => {
        setComments(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <>
      <h4 >Comment Section</h4>
      <form onSubmit={handleSubmitComment}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          rows="4"
          cols="50"
          placeholder="Type your comment here..."
        ></textarea>
        <br />
        <button type="submit" className=" comment-subBtn">Add Comment</button>
      </form>

      <div>
        <h5 className="mt-4">Comments</h5>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <div key={index}>
                <h6 className="comment-user">{comment.userName}</h6>
                <li className="px-5 comment-area">{comment.comment}</li>
              </div> 
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </>
  );
}

export default CommentArea;
