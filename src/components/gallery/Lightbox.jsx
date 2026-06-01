import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          prevImage();
          break;

        case "ArrowRight":
          nextImage();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="lightbox-overlay">
      <button className="lightbox-close" onClick={onClose}>
        ✕
      </button>

      <button className="lightbox-arrow left" onClick={prevImage}>
        ‹
      </button>

      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="lightbox-image"
      />

      <button className="lightbox-arrow right" onClick={nextImage}>
        ›
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
