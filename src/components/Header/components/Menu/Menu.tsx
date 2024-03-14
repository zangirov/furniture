import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <NavLink className={styles.item_navigate} to="/">
              Главная
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink className={styles.item_navigate} to="/adele-nn">
              О компании
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink className={styles.item_navigate} to="/gallery/straight">
              Наши работы
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink className={styles.item_navigate} to="/price">
              Прайс
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
      </nav>
    </div>
  );
};

export default Menu;
