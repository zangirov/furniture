import image1 from "./images/0e4be3780e1e0621703cb35cbc8b984a 1.png";
import image2 from "./images/1200x630wa 1.png";
import image3 from "./images/373ab9d7a9-1_underPageSpeedOptimization_250x 1.png";
import image4 from "./images/_ 1.png";
import image5 from "./images/cum 1.png";
import image6 from "./images/Лого-Сордис 1.png";
import style from "./Partners.module.scss";

export const Partners = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.block__title}>
          <h5 className={style.title}>Наши партнёры</h5>
        </div>
        <div className={style.images}>
          <img className={style.img} src={image1} alt="" />
          <img className={style.img} src={image2} alt="" />
          <img className={style.img} src={image3} alt="" />
          <img className={style.img} src={image4} alt="" />
          <img className={style.img} src={image5} alt="" />
          <img className={style.img} src={image6} alt="" />
        </div>
      </div>
    </section>
  );
};
