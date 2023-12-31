import React from "react";
import "./Photomodal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Photomodal = ({ photo, onClose }) => {
  return (
    <div className="modal_bg">
      <button onClick={onClose} className="close_modal">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="custom_modal">
        <div className="modal_body">
          {photo.url && <img src={photo.url} alt={photo.title} />}

          {photo.videoURL && (
            <iframe
              src={photo.videoURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Photomodal;
