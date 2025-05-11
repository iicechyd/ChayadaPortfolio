import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function CardComponent({
  image,
  title,
  description,
  linkto,
  tosource,
  gallery = [],
}) {
  const [showGallery, setShowGallery] = useState(false);

  const handleCardClick = () => {
    if (gallery.length > 0) {
      setShowGallery(true);
    }
  };

  const handleClose = () => setShowGallery(false);

  return (
    <>
      <Card
        className="custom-card"
        onClick={handleCardClick}
        style={{
          width: "22rem",
          height: "28rem",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          border: "2",
          overflow: "hidden",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          className="card-img-hover"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ fontSize: "17px", textAlign: "center" }}>
            {title}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <div
            className="mt-auto text-start"
            onClick={(e) => e.stopPropagation()}
          >
            {linkto && (
              <a href={linkto}>
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{
                    cursor: "pointer",
                    color: "black",
                    marginRight: "12px",
                    transform: "scale(1.3)"
                  }}
                />
              </a>
            )}
            {tosource && (
              <a href={tosource}>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ cursor: "pointer", color: "black", transform: "scale(1.3)" }}
                />
              </a>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={showGallery}
        onHide={handleClose}
        centered
        size="xl"
        dialogClassName="custom-gallery-modal"
      >
        
        <Modal.Header>
          <Modal.Title style={{ color: "white" }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {gallery.map((imgUrl, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={imgUrl}
                  alt={`Slide ${idx}`}
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CardComponent;
