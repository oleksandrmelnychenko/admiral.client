import React from 'react';
import { useDispatch } from 'react-redux';

import './header.scss';
import { TokenHelper } from '../../../../helpers/token.helper';
import * as authAction from '../../../../redux/actions/auth.actions';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userToken = TokenHelper.getAccessToken();
  const userInfo = TokenHelper.parseJwt(userToken);

  const logout = () => {
    dispatch(authAction.logOut());
    TokenHelper.removeAccessToken();
  };

  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__user-email">{userInfo.email}</div>
      <div className="header__logout" onClick={logout}></div>
    </div>
  );
};

export default Header;
