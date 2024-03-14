import style from "./Footer.module.scss";
import Info from "./components/Info";
import Links from "./components/Links";
import Docs from "./components/Documents/Docs";
import Button from "../Button/Button";
import Copyright from "./components/Copyright";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Info />
        <Links />
        <Docs />
        <div>
          <div>
            <Button />
            <Button/>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
