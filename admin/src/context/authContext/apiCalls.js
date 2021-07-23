import Axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from './AuthActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    console.log('login start');
    const res = await Axios.post('http://localhost:5004/api/auth/login', user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};