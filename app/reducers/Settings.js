import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

export default handleActions({
  [types.SET_SETTINGS]: (state, { payload }) => ({ ...state, ...payload }),
}, { });

