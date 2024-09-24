import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import i18next from "i18next";


const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };


  // switch lanuage using redux
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const switchLanguage = (e) => {
    const lang = e.target.value;

    dispatch({ type: 'SET_LANGUAGE', payload: lang });
    i18n.changeLanguage(lang);
    document.body.dir = i18next.dir(lang);
  };



  const isRtl = i18next.dir(language) === 'rtl';


  return (
    <nav>
      <div>
        <NavLink
          className={isActive} style={{
            marginRight: isRtl ? '' : '5px',
            marginLeft: isRtl ? '5px' : ''
          }} to="/">
          {t('home')}
        </NavLink>
        <NavLink className={isActive} to="/about">
          {t('about')}
        </NavLink>
      </div>

      <select defaultValue={i18n.language} onChange={switchLanguage}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </nav>
  );
};
