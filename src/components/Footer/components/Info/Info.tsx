import Logotype from "../../../Header/components/Logotype";
import { Link } from "react-router-dom";
import Text from "../../../Text";
import InfoItem from "./components/InfoItem";
import style from "./Info.module.scss";
import Telegram from "./components/icons/Telegram";
import Whatsapp from "./components/icons/Whatsapp";
import Viber from "./components/icons/Viber";

const Info = () => {
  return (
    <div className={style.info}>
      <ul className={style.info__menu}>
        <li className={style.info__item}>
          <div>
            <Logotype />
          </div>
        </li>
        <li className={style.info__item_location}>
          <div>
            <InfoItem
              className={style.location__icon}
              href="https://yandex.ru/maps/?rtext=~55.659173,37.762848"
            >
              <Text tag="p" className={style.info__text}>
                г. Нижний Новгород, пос. Кудьма,ул. Заводская, д. 38
              </Text>
            </InfoItem>
          </div>
        </li>
        <li className={style.info__item_email}>
          <div>
            <InfoItem
              className={style.email__icon}
              href="mailto:vladislav@adele-nn.ru"
            >
              <Text tag="p" className={style.info__text}>e-mail: vladislav@adele-nn.ru</Text>
            </InfoItem>
          </div>
        </li>
        <li className={style.info__item_phone}>
          <div>
            <InfoItem className={style.phone__icon} href="tel:+79527796627">
              <Text tag="p" className={style.info__text}>+7(952) 779-66-27</Text>
            </InfoItem>
          </div>
        </li>
        <li className={style.info__item_links}>
          <div>
            <h5>Мессенджеры:</h5>
            <div className={style.social}>
              <Link className={style.social__item} to="https://t.me/Olegozes">
                <Telegram />
              </Link>
              <Link
                className={style.social__item}
                to="https://wa.me/79527796627"
              >
                <Whatsapp />
              </Link>
              <Link
                className={style.social__item}
                to="viber://chat?number=+79527796627"
              >
                <Viber />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
