import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
  status: null,
  currentTime: 0,
};

export default handleActions({
  [types.PLAYER_STATUS_CHANGED]: (state, { payload }) => ({
    ...state, status: payload,
  }),

  [types.CURRENT_TIME_CHANGED]: state => ({
    ...state, currentTime: state.currentTime + 1,
  }),

  [types.CURRENT_TIME_RESET]: state => ({
    ...state, currentTime: 0,
  }),
}, initialState);
