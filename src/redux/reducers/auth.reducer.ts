import * as types from '../../constants/auth.types.constants';
import { IUserInfo } from '../../interfaces';

export interface IAuthState {
  isAuth: boolean;
  errorMessage: string;
  isError: boolean;
  userInfo: IUserInfo;
}

export const defaultAuthState = {
  isAuth: false,
  errorMessage: '',
  isError: false,
  userInfo: {}
};

export const authReducer = (state: IAuthState, action: any) => {
  switch (action.type) {
    case types.SUCCESS_SIGNIN:
      return {
        ...state,
        isAuth: action.payload.isAuth
      };
    case types.FAILURE_SIGNIN:
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage
      };
    case types.SUCCESS_SIGNUP:
      return {
        ...state,
        isAuth: action.payload.isAuth
      };
    case types.FAILURE_SIGNUP:
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage
      };
    case types.SUCCESS_ADD_ACCOUNT_TYPE:
      return {
        ...state,
        userInfo: action.payload
      };
    case types.SUCCESS_UPDATE_COMPANY_INFO:
      return {
        ...state,
        userInfo: { ...state.userInfo, CompanyInfo: action.payload }
      };
    case types.SUCCESS_USER_ACCOUNT_TYPE:
      return {
        ...state,
        userInfo: action.payload
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuth: action.payload.isAuth
      };
    case types.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };

    default:
      return state || defaultAuthState;
  }
};
