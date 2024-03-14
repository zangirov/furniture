import style from "./Banner.module.scss";
import Text from "../Text";
import Button from "../Button/Button";
import Slider from "./components/Slider/Slider";

const Banner = () => {
  return (
    <section className={style.container}>
      <div className={style.main__info}>
        <Text className={style.title} tag={"h1"}>
          <span className={style.title_color}>
            <i>МЯГКАЯ МЕБЕЛЬ </i>
          </span>
          НА
          <span className={style.title_color}>
            <i> ЗАКАЗ </i>
          </span>
          В НИЖНЕМ НОВГОРОДЕ
        </Text>
        <Text className={style.main__text}>
          <b>Основное</b> наше направление - изготовление любых моделей диванов,
          кроватей, кресел, пуфов, стеновых панелей. Также мы занимаемся
          <b> перетяжкой</b> мягкой мебели любой сложности: домашней, офисной,
          производственной и мебели сегмента <b>HoReCa</b>.
        </Text>
        <div>
          <Button className={"brand"} loading={false}>
            Заказать звонок
          </Button>
          <Button className={"white"} loading={false}>
            Наши работы
          </Button>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Banner;
