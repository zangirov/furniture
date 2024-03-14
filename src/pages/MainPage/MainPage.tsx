import { Advantages } from "../../components/Advantages";
import Banner from "../../components/Banner";
import { Contacts } from "../../components/Contacts/Contacts";
import { Partners } from "../../components/Partners";
import { Stages } from "../../components/Stages/Stages";
import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={style.main__page}>
      <Banner />
      <Contacts />
      <Advantages />
      <Stages />
      <Partners />
    </main>
  );
};
