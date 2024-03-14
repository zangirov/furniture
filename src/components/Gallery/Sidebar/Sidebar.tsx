import style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const GallerySidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink to="straight" className={style.link}>
              Диван прямой
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="corner">Диван угловой</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="module">Диван модульный</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="bed">Кровать</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="horeca">Мебель для кафе, ресторанов</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="armchair">Кресло</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="sofa">Каретная стяжка (Честер)</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="puff">Пуф</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GallerySidebar;
