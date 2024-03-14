type ImageTypes = {
  src: string;
  alt: string;
  className: string;
  onClick: React.MouseEventHandler;
};

const Image = ({ src, onClick, alt, className }: ImageTypes) => {
  return (
    <div>
      <img className={className} src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default Image;
