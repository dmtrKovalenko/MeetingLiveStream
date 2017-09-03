import { handleActions } from 'redux-actions';
import { BUFFERING } from '../constants/PlayerStatuses';
import * as types from '../actionTypes';

const initialState = {
  status: BUFFERING,
};

export default handleActions({
  [types.PLAYER_STATUS_CHANGED]: (state, { payload }) => ({
    ...state, status: payload,
  }),
}, initialState);
