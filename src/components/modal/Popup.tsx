import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import './modal.scss';

class Popup extends React.Component<any, any> {
  modal: HTMLDivElement = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.modal);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
  }

  render() {
    if (this.props.isOpen) {
      return ReactDOM.createPortal(
        <div className="overlay">
          <div className="modal modal__role">
            <Route
              path={`${this.props.path}`}
              component={this.props.component}
            />
            {this.props.isClosed && (
              <button
                className="btn btn__close"
                onClick={this.props.modalAction.modalClose}></button>
            )}
          </div>
        </div>,
        this.modal
      );
    } else return null;
  }
}

export default Popup;
