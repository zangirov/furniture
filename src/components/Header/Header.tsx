import Button from "../Button/Button";
import styles from "./Header.module.scss";
import Logotype from "./components/Logotype";
import Menu from "./components/Menu";

const Header = () => {
  return (
    <header className={styles.header}>
        <Logotype />
        <Menu />
        <Button loading={false} className={styles.brand}>
          Оставить заявку
        </Button>
    </header>
  );
};

export default Header;
