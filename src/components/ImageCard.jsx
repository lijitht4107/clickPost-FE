import "./css/ImageCard.css";
import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useNavigate, useParams } from "react-router-dom";
import AxiosInstants from "../config/AxiosInstants";
import { BASE_URL } from "../constants/Const";
import downloadIcon from "../assets/download-svgrepo-com.svg";
import editBtn from "../assets/edit-3-svgrepo-com.svg";
import deleteBtn from "../assets/delete-svgrepo-com.svg";
import { ModalView } from "../constants/ModalView";
import CommentArea from "./commen/CommEnt";

function ImageCard() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [imageData, setImageData] = useState({});
  const [commentFielD, setCommentFielD] = useState(null);
  const [editImagemodal, setEditImageModal] = useState(false);
  const [editedImageData, setEditImageData] = useState({});

  useEffect(() => {
    getSingleImageData(id);
  }, [id]);
 

  const getSingleImageData = (id) => {
    AxiosInstants.get(`/users/getsingleimage/${id}`, {
      params: { imageId: id },
    })
      .then((res) => {
        setImageData(res.data);
        setEditImageData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ImageDownload = () => {
    const imageUrl = `${BASE_URL}/pitchers/${imageData[0].pitcher}`;
    AxiosInstants.get(imageUrl, { responseType: "blob" })
      .then((res) => {
        const blob = new Blob([res.data]);
        saveAs(blob, imageData.pitcher); // Provide a filename for the downloaded image
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const HandleEditedData = (e) => {
    setEditImageData({ ...editedImageData, [e.target.name]: e.target.value });
  };
  const MakeImageDataChange = () => {
    AxiosInstants.patch(`/users/imageDataUpdate/${id}`, editedImageData).then(
      (res) => {
        setEditImageModal(false);
        setImageData(editedImageData);
      }
    );
  };
  const ImageDelete = () => {
    AxiosInstants.delete(`/users/imageDelete/${id}`, {
      params: { imageId: id },
    }).then((resp) => {
      Navigate("/home");
    });
  };

  return (
    <>
      <body className="container ">
        <div className="card pt-1">
          <img
            height={"100%"}
            src={`${BASE_URL}/pitchers/${imageData[0]?.pitcher}`}
            className="card-img-top"
            alt="Fissure in Sandstone"
          />
          
          <section>
          {/* <Likku/> */}
          </section>
          <div className="image-datas">
          <h3>{imageData[0]?.title}</h3>
          <h6>{imageData[0]?.description}</h6>
          <p>{imageData[0]?.timeStamp}</p>
          </div>


          <img
            className="edit-button"
            width={"35px"}
            src={editBtn}
            alt=""
            onClick={() => setEditImageModal(true)}
          />
          <img
            className="delete-btn"
            width={"35px"}
            src={deleteBtn}
            alt=""
            onClick={ImageDelete}
          />
          <img
            className="download-btn"
            height={"35px"}
            src={downloadIcon}
            alt=""
            onClick={ImageDownload}
          />
          <div className="card-body">
            <h5 className="card-title">{imageData.title}</h5>
          </div>
         
          <section>
          <CommentArea
            id={id}
            commentFielD={commentFielD}
            setCommentFielD={setCommentFielD}
          />
          </section>
          <ModalView Open={editImagemodal} setOpen={setEditImageModal}>
            <div className="editModal">
              <button
                className="editModal-Closebtn "
                onClick={() => setEditImageModal(false)}
              >
                X
              </button>
              <label htmlFor="title">
                title :
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={editedImageData.title}
                  onChange={HandleEditedData}
                ></input>
              </label>
              <label className="m-3" htmlFor="description">
                descrption :
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={editedImageData.description}
                  onChange={HandleEditedData}
                ></input>
              </label>
              <button className="btn btn-success" onClick={MakeImageDataChange}>
                change
              </button>
            </div>
          </ModalView>
          
        </div>
      </body>
    </>
  );
}

export default ImageCard;
