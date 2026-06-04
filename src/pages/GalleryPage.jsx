import Gallery from "../components/gallery/gallery";
import "./GalleryPage.css";

export default function GalleryPage() {
  return (
    <section>
      <h1>Galería Interactiva</h1>
      <h2>
        De la cocina a tu página web, nuestros servicios están enfocados en una
        experiencia donde lo resaltante es lo artesanal. Al igual que un chef
        selecciona cuidadosamente los ingredientes para crear un plato
        delicioso, nosotros seleccionamos las mejores herramientas y tecnologías
        para desarrollar soluciones digitales excepcionales.
      </h2>
      <Gallery />
    </section>
  );
}
