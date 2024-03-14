import Text from "../../../../../Text";
import style from "./Details.module.scss";

const Details = () => {
  return (
      <div className={style.container}>
        <Text tag="h6" className={style.title}>
          Общество с ограниченной ответственностью “Адель-НН”
        </Text>
        <Text tag="p">Юридический и почтовый адрес:</Text>
        <Text tag="p">
          603041 г. Нижний Новгород, ул. Спутника, д.7а, кв.66
        </Text>
        <Text tag="p">тел: 8 (952) 779-66-27</Text>
        <Text tag="p">E-mail: adel-nn@mail.ru</Text>
        <Text tag="p">ИНН 5256115137 КПП 525601001</Text>
        <Text tag="p">р/с 407 028 1001 45 000 03 204</Text>
        <Text tag="p">ООО «Банк Точка»</Text>
        <Text tag="p">к/с 30101810745374525104</Text>
        <Text tag="p">БИК 044525104</Text>
        <Text tag="p">Директор Зангиров Владислав Галиевич</Text>
        <Text tag="p">действует на основании Устава</Text>
      </div>
  );
};

export default Details;
