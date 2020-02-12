import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { initStore } from './redux/store/store.config';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  LocalizeProvider,
  initialize,
  setActiveLanguage,
  Language
} from 'react-localize-redux';

import './assets/styles/App.scss';
import { IApplicationState } from './redux/reducers';
import { default as Routing } from './components/Routing';
import globalTranslations from './assets/translation/translations.json';
import { TokenHelper } from './helpers/token.helper';
import * as authAction from './redux/actions/auth.actions';

const history = createBrowserHistory();
const store = initStore(history);

store.dispatch(
  initialize({
    languages: [
      { name: 'Ukraine', code: 'uk' },
      { name: 'English', code: 'en' }
    ],
    translation: globalTranslations,
    options: {
      renderToStaticMarkup,
      defaultLanguage: 'uk'
    }
  })
);

let language = (store.getState() as IApplicationState).localize.languages[0]
  .code;
let localizationFromQuery = window.location.pathname.substr(1).split('/')[0];

const checkLocalization: number = (store.getState() as IApplicationState).localize.languages
  .map((languages: Language) => languages.code)
  .indexOf(localizationFromQuery);

if (checkLocalization !== -1) {
  const index = checkLocalization;
  language = (store.getState() as IApplicationState).localize.languages[index]
    .code;
}

store.dispatch(setActiveLanguage(language));

const onInit = ({ store }: { store: any; language: string }) => {
  if (TokenHelper.isAuthenticated()) {
    store.dispatch(authAction.authSuccessAction());
  }
};

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <Router history={history}>
        <Routing onEnter={onInit({ store, language })} />
      </Router>
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
