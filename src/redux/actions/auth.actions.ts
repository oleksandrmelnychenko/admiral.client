import * as types from '../../constants/auth.types.constants';

export const signInAction = (formData: Object) => ({
  type: types.REQUEST_SIGNIN,
  payload: formData
});

export const signUpAction = (formData: Object) => ({
  type: types.REQUEST_SIGNUP,
  payload: formData
});

export const authSuccessAction = () => ({
  type: types.SUCCESS_SIGNIN,
  payload: { isAuth: true }
});

export const logOut = () => ({
  type: types.LOGOUT,
  payload: { isAuth: false }
});

export const clearErrorMessage = () => ({
  type: types.CLEAR_ERROR_MESSAGE,
  payload: { errorMessage: '' }
});
