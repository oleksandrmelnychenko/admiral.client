import React from 'react';
import { useHistory } from 'react-router-dom';
import { withLocalize, Language } from 'react-localize-redux';

import './language-toggle.scss';

export interface ILanguageToggleProps {
  languages: Language[];
  activeLanguage: Language;
  setActiveLanguage: (languageCode: string) => void;
}

export const LanguageToggle: React.FC<ILanguageToggleProps> = ({
  languages,
  activeLanguage,
  setActiveLanguage
}) => {
  const history = useHistory();
  let { pathname } = useHistory().location;

  const selectLanguage = (langCode: string) => {
    setActiveLanguage(langCode);
    const changePath = pathname.replace(activeLanguage.code, langCode);
    history.push(changePath);
  };
  return (
    <ul className="language-selector">
      {languages.map((lang: Language) => (
        <li key={lang.code} className="language-selector__item">
          <button
            className={lang.code === activeLanguage.code ? 'active' : ''}
            onClick={() => selectLanguage(lang.code)}>
            {lang.code}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default withLocalize(LanguageToggle);
