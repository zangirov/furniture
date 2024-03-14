import Text from "../Text";
import style from "./Advantages.module.scss";

export const Advantages = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div>
          <Text className={style.title} tag="h2">
            Почему выбирают нас?
          </Text>
        </div>
        <div>
          <ul className={style.list}>
            <li>
              <Text className={style.title__item} tag="h5">
                <span className={style.title}>10+</span> лет опыта
              </Text>
            </li>
            <li>
              <Text className={style.title__item} tag="h5">
                Более <span className={style.title}>7000</span> довольных
                клиентов
              </Text>
            </li>
            <li>
              <Text className={style.title__item} tag="h5">
                <span className={style.title}>12</span> месяцев гарантии
              </Text>
            </li>
            <li>
              <Text className={style.title__item} tag="h5">
                <span className={style.title}>0</span> рублей за расчет
                стоимости, замер и консультацию
              </Text>
            </li>
            <li>
              <Text className={style.prgrph} tag="p">
                Никаких посредников
              </Text>
            </li>
            <li>
              <Text className={style.prgrph} tag="p">
                Собственное производство
              </Text>
            </li>
            <li>
              <Text className={style.prgrph} tag="p">
                Индивидуальный подход
              </Text>
            </li>
            <li>
              <Text className={style.prgrph} tag="p">
                Качественные материалы
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
