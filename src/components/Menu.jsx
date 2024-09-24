import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useLanguageContext } from '../contexts/LanguageContexts';



const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
  const { i18n, t } = useTranslation();
  const { language, setLanguage } = useLanguageContext();

  const switchLanguage = (e) => {
    const lang = e.target.value;

    setLanguage(lang);
    i18next.changeLanguage(lang);
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
