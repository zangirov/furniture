import { ImageProps } from "./Image.types";
import style from "./Image.module.scss";

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  onClick,
  className,
  imageWrapper,
}) => {
  return (
    <div className={`${imageWrapper}`}>
      <img
        className={`${style.image} ${className}`}
        src={src}
        alt={alt}
        onClick={onClick}
      />
    </div>
  );
};
