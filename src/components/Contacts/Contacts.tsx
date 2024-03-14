import { Link } from "react-router-dom";
import Text from "../Text";
import Telegram from "../icons/Telegram/Telegram";
import Viber from "../icons/Viber/Viber";
import Whatsapp from "../icons/Whatsapp/Whatsapp";
import style from "./Contacts.module.scss";
import Email from "../icons/Email";

export const Contacts = () => {
  return (
    <section>
      <div className={style.container}>
        <Text tag="h4" className={style.contacts__text}>
          Назовём примерную стоимость по Вашим фотографиям и эскизам по номеру:
          <Link className={style.phone} to="tel:+79527796627">
              +7(952) 779-66-27
          </Link>
        </Text>

        <div className={style.social}>
          <Link className={style.social__item} to="https://t.me/Olegozes">
            <Telegram />
          </Link>
          <Link className={style.social__item} to="https://wa.me/79527796627">
            <Whatsapp />
          </Link>
          <Link className={style.social__item} to="viber://chat?number=+79527796627">
            <Viber />
          </Link>
        </div>
        <Link className={style.email} to="mailto:">
          e-mail: vladislav@adele-nn.ru
          <Email className={style.email__icon}/>
        </Link>
      </div>
    </section>
  );
};
