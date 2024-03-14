import { useEffect, useState } from "react";
import style from "./ImagesGallery.module.scss";
import Modal from "./Modal/Modal";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Image from "./Image";

type GalleryType = {
  images: { id: number; src: string; alt: string }[];
};

const ImagesGallery = ({ images }: GalleryType) => {
  const [imageID, setImageID] = useState(0);
  const [page, setPage] = useState(1);
  const [view, setView] = useState(false);
  const location = useLocation();
  const imagePath = useParams();
  const navigate = useNavigate();

  const data = images[imageID];

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    console.log(navigate);
  };

  const openModal = (id: number) => {
    setView(true);
    return setImageID(id);
  };

  const closeModalHaldler = () => {
    event?.stopPropagation();
    setView(false);
    navigate(-1);
  };

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {images
          .filter((item, indx) => {
            return indx < page * 9 && indx >= page * 9 - 9;
          })
          .map((img, id) => (
            <li className={style.item} key={img.id}>
              <div className={style.wrapper}>
                <Link
                  to={`${location.pathname}/${img.id}`}
                  state={{ background: location }}
                >
                  <Image
                    onClick={() => openModal(id)}
                    src={img.src}
                    alt={img.alt}
                    className={style.image}
                  />
                </Link>
              </div>
            </li>
          ))}
      </ul>
      {view && (
        <Modal
          src={data.src}
          alt={data.alt}
          closeModal={() => {
            event?.stopPropagation();
            setView(false);
            navigate(-1);
          }}
          nextImage={() =>
            imageID !== images.length - 1
              ? setImageID(imageID + 1)
              : setImageID(0)
          }
          prevoiusImage={() =>
            imageID > 0
              ? setImageID(imageID - 1)
              : setImageID(images.length - 1)
          }
        />
      )}
    </div>
  );
};

export default ImagesGallery;
