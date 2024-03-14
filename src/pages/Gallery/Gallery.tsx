import { useParams } from "react-router-dom";
import style from "./Gallery.module.scss";
import ImagesGallery from "../../components/Gallery/ImagesGallery";
import GallerySidebar from "../../components/Gallery/Sidebar/Sidebar";
import { images } from "../../helper/imagesData";

const Gallery = () => {
  const { type = "straight" } = useParams();

  const imagesType = images.filter((image) => image.alt === type);

  return (
    <div className={style.container}>
      <GallerySidebar />
      <ImagesGallery images={imagesType} />
    </div>
  );
};

export default Gallery;
