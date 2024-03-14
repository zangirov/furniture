import { NavLink } from "react-router-dom";
import styles from "./Links.module.scss";

const Links = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <NavLink className={styles.item_navigate} to="/gallery/straight">
            Наши работы
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink className={styles.item_navigate} to="/adele-nn">
            О компании
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink className={styles.item_navigate} to="/price">
            Цены
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink className={styles.item_navigate} to="/condition">
            Оплата и доставка
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink className={styles.item_navigate} to="/contacts">
            Контакты
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Links;
