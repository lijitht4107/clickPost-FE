import React, { useEffect, useState } from 'react'
import '../css/Likku.css'
import AxiosInstants from '../../config/AxiosInstants'
import { useParams } from 'react-router-dom'

const Likku = () => {
    const [like, setLike] = useState(0); 
    const [likeActive, setLikeActive] = useState(false);
    const [likeShow, setLikeShow] = useState({ like: 0 }); 
    const {id}=useParams()
    useEffect(()=>{
        likeF()
    }, [])
    const likeF = () => {
      const newLikeCound = likeActive? like-1 : like+1
      setLike(newLikeCound)
      setLikeActive(!likeActive)

      AxiosInstants.post('/users/like', { like }, { params: { imageId: id } })
        .then((response) => {
          setLikeShow(response.data.resp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <>
        <div className='like_dislike'>
          <button onClick={likeF}> Like: {likeShow.like}</button>
        </div>
      </>
    );
  };
  
  export default Likku;