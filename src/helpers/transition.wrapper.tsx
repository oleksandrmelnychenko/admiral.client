import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const TransitionWrapper = (props: any) => {
  return (
    <>
      <CSSTransition timeout={800} in={true} appear>
        {status => props.children}
      </CSSTransition>
    </>
  );
};
