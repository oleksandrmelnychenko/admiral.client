import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { TokenHelper } from './token.helper';
import * as API from '../constants/api.constants';
import { map, catchError } from 'rxjs/operators';
// import { getActiveLanguage } from 'react-localize-redux';
import { IApplicationState } from '../redux/reducers/index';

export interface IWebResponse {
  body: Object;
  message: string;
  statusCode: number;
}

export const ajaxGetWebResponse = (
  urlPath: string,
  state: IApplicationState
) => {
  //#TODO add current language to the path
  //   const currentLanguage = getActiveLanguage(state.localize).code;

  return ajax
    .getJSON<IWebResponse>(`${API.SERVER_URL}${urlPath}`, {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TokenHelper.getAccessToken()}`
    })
    .pipe(
      map(response => response.body),
      catchError(error => {
        return of(error);
      })
    );
};

export const ajaxPostResponse = (
  urlPath: string,
  body: any,
  state: IApplicationState,
  token = false
) => {
  //#TODO add current language to the path
  //   const currentLanguage = getActiveLanguage(state.localize).code;

  let header = {
    'Content-Type': 'application/json'
  };

  if (token) {
    header = Object.assign(header, {
      Authorization: `Bearer ${TokenHelper.getAccessToken()}`
    });
  }

  return ajax.post(`${API.SERVER_URL}${urlPath}`, body, header).pipe(
    map(response => response.response.body),
    catchError(error => {
      return of(error);
    })
  );
};
