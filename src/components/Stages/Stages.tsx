import Text from "../Text";
import style from "./Stages.module.scss";
import {
  Calculator,
  Cash,
  Delivery,
  Handshake,
  Money,
  Phone,
  Roller,
  Sofa,
} from "./icons/Icons.tsx";

export const Stages = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div>
          <Text className={style.title} tag="h2">
            Этапы производства
          </Text>
        </div>
        <div className={style.wrapper__list}>
          <ul className={style.list}>
            <li className={style.item}>
              <div className={style.number}>1</div>
              <Calculator />
              <Text className={style.prgrph} tag="p">
                Запрос на расчет стоимости работ
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>2</div>
              <Roller />
              <Text className={style.prgrph} tag="p">
                Выбор материала
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>3</div>
              <Handshake />
              <Text className={style.prgrph} tag="p">
                Согласование цены
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>4</div>
              <Money />
              <Text className={style.prgrph} tag="p">
                Предоплата по договору
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>5</div>
              <Sofa />
              <Text className={style.prgrph} tag="p">
                Выполнение заказа
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>6</div>
              <Phone />
              <Text className={style.prgrph} tag="p">
                Уведомление о готовности
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>7</div>
              <Cash />
              <Text className={style.prgrph} tag="p">
                Доплата по договору
              </Text>
            </li>
            <li className={style.item}>
              <div className={style.number}>8</div>
              <Delivery />
              <Text className={style.prgrph} tag="p">
                Отгрузка готовой мебели
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
