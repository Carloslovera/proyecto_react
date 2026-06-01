import { useState } from "react";
import "./Gallery.css";

import { galleryImages } from "../../data/galleryData";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-card"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
