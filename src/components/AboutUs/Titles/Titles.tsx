import worked from "../../../assets/images/worked.jpg";
import material from "../../../assets/images/materials.jpg";
import sofa from "../../../assets/images/sofa.jpg";
import style from "./Titles.module.scss";

const Titles = () => {
  return (
    <div className={style.container}>
      <div>
        <ul className={style.list}>
          <li className={style.item}>
            <h2 className={style.title}>
              <i>Производство и ремонт мягкой мебели</i>
              <span className={style.color}>ООО «Адель-НН»</span>
            </h2>
          </li>
          <li className={style.item}>
            <div className={style.circle} />
            <h4 className={style.subtitle}>Более 7000</h4>
            <p className={style.text}>
              довольных клиентов, многие из которых являются постоянными.
            </p>
          </li>
          <li className={style.item}>
            <div className={style.circle} />
            <h4 className={style.subtitle}>С 2012 года</h4>
            <p className={style.text}>
              мы занимаемся производством и ремонтом мягкой мебели.
            </p>
          </li>
          <li className={style.item}>
            <div className={style.circle} />
            <h4 className={style.subtitle}>В 15 городов</h4>
            <p className={style.text}>России мы отправили нашу мебель.</p>
          </li>
          <li className={style.item}>
            <div className={style.circle} />
            <h4 className={style.subtitle}>430 м<sup className={style.sup}>2</sup></h4>
            <p className={style.text}>площадь производственных помещений.</p>
          </li>
          <li className={style.item}>
            <div className={style.circle} />
            <h4 className={style.subtitle}>Более 400</h4>
            <p className={style.text}>
              моделей мягкой мебели мы успешно изготовили для наших клиентов.
            </p>
          </li>
        </ul>
      </div>
      <div className={style.price}>
        <div>
          <h3 className={style.price__title}>Как узнать цены?</h3>
          <p className={style.price__text}>
            Цена на каждую работу обговаривается индивидуально, а влияют на
            конечную стоимость следующие факторы:
          </p>
        </div>
        <div className={style.price__item}>
          <div className={style.img__block}>
            <img src={worked} alt={"Изображение человека за работой"} />
          </div>
          <div>
            <p className={style.item__text}>
              <b>Сложность проекта:</b> каждый проект уникален, цена может
              варьироваться в зависимости от сложности и объёма работ.
            </p>
          </div>
        </div>
        <div className={style.price__item}>
          <div className={style.img__block}>
            <img src={material} alt={"Изображение тканей"} />
          </div>
          <div>
            <p className={style.item__text}>
              <b>Используемые материалы:</b> мы предлагаем широкий выбор
              качественных материалов разных ценовых категорий.
            </p>
          </div>
        </div>
        <div className={style.price__item}>
          <div className={style.img__block}>
            <img src={sofa} alt={"Изображение мебели"} />
          </div>
          <div>
            <p className={style.item__text}>
              <b>Размер и тип мебели:</b> размер и тип мебели также влияют на
              стоимость, поскольку
              <br /> они определяют количество работы и материалов, необходимых
              для производства или ремонта.
            </p>
          </div>
        </div>
      </div>
      <h6 className={style.secondary}>
        Мы готовы воплотить ваши идеи в реальность и создать мебель, отражающую
        вашу индивидуальность и стиль. Обратитесь к нам сегодня, чтобы обсудить
        ваш проект и получить предложение по цене.
      </h6>
    </div>
  );
};

export default Titles;
