import React, { useState, useEffect } from 'react';
import '../css/Comments.css'
import { useSelector } from 'react-redux';
import AxiosInstants from '../../config/AxiosInstants';
import { useParams } from 'react-router-dom';

function CommentSection({imageData}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const { userDetails } = useSelector(state => state.user);
    const {id}=useParams()

    useEffect(() => {
        fetchComments();
    },[]);

    const fetchComments = () => {
        const storedComments = JSON.parse(localStorage.getItem('comments'));
        if (storedComments) {
            setComments(storedComments);
        } else {
            AxiosInstants.get('/users/comments')
                .then(response => {
                    setComments(response.data.response);
                    // Store comments in local storage
                    localStorage.setItem('comments', JSON.stringify(response.data.response));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
    

    const storeComment = () => {
        AxiosInstants.post('/users/comments', {
            comments,
            userId:userDetails.userid,
            postId:id
          })
            .then(response => {
                const newComment = response.data.response;
                setComments([...comments, newComment]);
                // Update local storage with new comment
                localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
                setComment('');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <div>
            <h2>Comments</h2>

            <div>
                <textarea
                    name="comment"
                    value={comment}
                    onChange={handleChange}
                    placeholder="Write a comment..."
                    rows={4}
                    cols={50}
                />
                <br />
                <button type="submit" onClick={storeComment}>
                    Add Comment
                </button>
            </div>

            {comments.map((element, index) => (
                <div key={index}>
                  <div className='d-flex p-2'>
                  <h3 className='user_icon'>{userDetails.userName.slice(0,1)}</h3>
                    <h6 className='comment_user'>{element.user} :-</h6>
                    </div>
                    <p className='comment_area'>{element.comments}</p>
                </div>
            ))}
        </div>
    );
}

export default CommentSection;


