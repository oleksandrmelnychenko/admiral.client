import React from 'react';

import './status-bar.scss';

export interface IStatusBarProps {}

export const StatusBar: React.FC<IStatusBarProps> = props => {
  return <div className="status-bar"></div>;
};

export default StatusBar;
