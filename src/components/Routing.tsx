import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { getActiveLanguage, LocalizeState } from 'react-localize-redux';

import PrivateRoute from './PrivateRoute';
import MasterPage from './pages/master/MasterPage';
import { IApplicationState } from '../.../../redux/reducers';
import { PageNotFound } from './pages/PageNotFound';
import { IAuthState } from '../redux/reducers/auth.reducer';
import AccountSecurity from '../components/pages/account-security/AccountSecurity';

export interface IRoutingProps {
  onEnter: void;
}

export const Routing: React.FC<IRoutingProps> = props => {
  const localize = useSelector<IApplicationState, LocalizeState>(
    state => state.localize
  );
  const auth = useSelector<IApplicationState, IAuthState>(state => state.auth);

  const languageCode = getActiveLanguage(localize).code;
  if (!auth.isAuth)
    return (
      <>
        <Redirect to={`/${languageCode}/account-security`} />
        <Route
          path={`/${languageCode}/account-security`}
          component={AccountSecurity}
        />
      </>
    );

  return (
    <Switch>
      <Redirect exact from="/" to={`/${languageCode}`} />

      <Redirect exact from={`/${languageCode}`} to={`/${languageCode}/app`} />

      <Route
        path={`/${languageCode}/account-security`}
        component={AccountSecurity}
      />

      <PrivateRoute path={`/${languageCode}/app`} component={MasterPage} />

      <Route path={`/${languageCode}/404`} component={PageNotFound} />

      <Redirect from="*" to={`/${languageCode}/404`} />
    </Switch>
  );
};

export default Routing;
