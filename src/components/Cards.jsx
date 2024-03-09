import React from 'react';
import './css/Cards.css'
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { BASE_URL } from '../constants/Const';
import { useNavigate } from 'react-router-dom';


export default function Cards({image}) {
  const navigate=useNavigate()

  return (<>
  <div className='image-show'>
    <div style={{width:'48rem',border:'none'}} className=' card-img col-12 col-md-3 col-lg-4 col-xl-2 col-xxl-1  '>
      
      <MDBCardImage onClick={()=>navigate(`/imageview/${image?._id}`)} src={`${BASE_URL}/pitchers/${image.pitcher}`} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle >{image?.title}</MDBCardTitle>
        <MDBCardText>
          {image?.description}
        </MDBCardText>
      </MDBCardBody>
    </div>
    
    
    </div>
    </>
  );
}

