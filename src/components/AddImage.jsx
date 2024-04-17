import React, { useState } from "react";
import "./css/AddImage.css";
import Navbar from "./commen/Navbar";
import AxiosInstants from "../config/AxiosInstants";
import { toastSuccess } from "../constants/Plugins";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";


 function AddImage() {
  const navigate=useNavigate()
 
  const {userDetails}=useSelector((state)=>state.user)
  const userId = userDetails._id
    const [formValue, setFormValue] = useState({
        title:'',
        Description:'',
    })
    const [imageAdd,setImageAdd] =useState(null)
    const [selectedImage, setSelectedImage] = useState('')
   
    const onChanging=(e)=>{
        
        setFormValue({...formValue,[e.target.name]:e.target.value})
        
    }
    const onImage = (e)=>{
        setImageAdd(e.target.files[0])
        e.target.files[0]? setSelectedImage(URL?.createObjectURL(e.target.files[0])): setSelectedImage(null)
    }
    const addImageData=()=>{
        let fileData=new FormData();
        fileData.append("image",imageAdd)
        AxiosInstants.post('/users/AddImages',fileData,{params:formValue, userId: userId },{Headers:{'content-Type':'multipart/form-data'}}).then((response)=>{
          toastSuccess('added image succesfully')
            navigate('/home')
        }).catch((err)=>{console.log(err);})
    }
  return (
    <>
      <Navbar />
      

      <div className="container mt-5 d-grid p-3 text-center add-img-form">
       
        <h1 className="text-center add-img-hedding">image selection area</h1>
        <label className="pt-5" htmlFor="images">
          select a image :<input type="file" name="images" id="images" onChange={onImage}/>
          {selectedImage && <img src={selectedImage} alt="" width={'100px'} height={'100px'}/>}
        </label>
        <label htmlFor="" className="p-3">
          image title :<input type="text" name="title" value={formValue.title} onChange={onChanging} />
        </label>
        <label htmlFor="">
          description :<input type="text" name="Description" value={formValue.Description} onChange={onChanging}/>
        </label>
        
        <div className="p-3 ">
        <button className=" btn btn-primary px-5 " onClick={addImageData}>submit</button>
        </div>
        
      </div>

     
    </>
  );
}

export default AddImage;
