import React, { useEffect, useState } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import AxiosInstants from '../config/AxiosInstants';
import { BASE_URL } from '../constants/Const';

export default function ImageCarousel() {

    const [imageCarousel,setImageCrousel]=useState([])

    useEffect(()=>{
        ImageFlex()
    },[])

    const ImageFlex =()=>{
        AxiosInstants.get('/users/getAllImages').then((response)=>{
            setImageCrousel(response.data)
        }).then((err)=>{
          console.log(err);
        })
    }

  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem >
        {imageCarousel.map((imag)=>(<img src={`${BASE_URL}/pitchers/${imag.pitcher}`} className='d-block w-10' alt='...' />))}
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      {/* <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> */}
    </MDBCarousel>
  );
}