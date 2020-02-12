import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './HomePage';

export interface IMasterRouteControllerProps {
  languageCode: string;
  path: string;
}

const MasterRouteController: React.FC<IMasterRouteControllerProps> = props => {
  return (
    <Switch>
      <Route exact path={`${props.path}`} component={HomePage} />

      <Redirect from="*" to={`/${props.languageCode}/404`} />
    </Switch>
  );
};

export default MasterRouteController;
