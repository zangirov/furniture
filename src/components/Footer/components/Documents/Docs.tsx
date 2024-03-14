import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/privacy">Политика обработки персональных данных</Link>
        </li>
        <li>
          <Link to="https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4b6xDRMjgNyOtsp6ED9BUSq06M73hFgpua4_uaaE2feO9GupPM6hODAVbkyavOyUrg">
            Реквизиты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Docs;
