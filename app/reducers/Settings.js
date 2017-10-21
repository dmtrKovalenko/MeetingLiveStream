import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
  initialized: false,
};
export default handleActions({
  [types.SET_SETTINGS]: (state, { payload }) => ({
    ...state,
    ...payload,
    initialized: true,
  }),
}, initialState);

