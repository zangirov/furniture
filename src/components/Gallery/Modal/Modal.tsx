import style from "./Modal.module.scss";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import Close from "./icons/Close";

type ModalTypes = {
  closeModal?: React.MouseEventHandler;
  nextImage?: React.MouseEventHandler;
  prevoiusImage?: React.MouseEventHandler;
  src?: string;
  alt?: string;
};

const Modal = ({
  prevoiusImage,
  nextImage,
  closeModal,
  src,
  alt,
}: ModalTypes) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.image_block}>
          <img src={src} alt={alt}  className={style.image}/>
        </div>
        <button onClick={prevoiusImage}>
          <ArrowLeft />
        </button>
        <button onClick={nextImage}>
          <ArrowRight />
        </button>
        <button onClick={closeModal}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default Modal;
