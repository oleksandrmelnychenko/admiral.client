import React from 'react';
import { Translate } from 'react-localize-redux';

import './footer.scss';
import StatusBar from './status-bar/StatusBar';
import LanguageToggle from './language-toggle/LanguageToggle';

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = props => {
  return (
    <div className="footer">
      <div className="footer__navigation"></div>
      <div className="footer__body">
        <StatusBar />
        <Translate id="copyright" />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Footer;
