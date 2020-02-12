import React from 'react';
import { match } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getActiveLanguage, LocalizeState } from 'react-localize-redux';

import './master-page.scss';
// import Popup from '../../modal/Popup';
import { IApplicationState } from '../../../redux/reducers';
import MasterRouteController from './MasterRouteController';
import Header from './header/Header';
import Footer from './footer/Footer';

interface IMasterPageProps {
  match: match;
}

const MasterPage: React.FC<IMasterPageProps> = props => {
  const localize = useSelector<IApplicationState, LocalizeState>(
    state => state.localize
  );
  const languageCode = getActiveLanguage(localize).code;
  const routeProps = {
    languageCode,
    path: props.match.path
  };

  return (
    <>
      <Header />
      <div className="master-page bg-grey">
        <MasterRouteController {...routeProps} />

        {/* <Popup
          path={props.match.path}
          component={modalComponent}
          isClosed={false}
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default MasterPage;
