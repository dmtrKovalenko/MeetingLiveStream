import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
  bitrate: 0,
};

export default handleActions({
  [types.BITRATE_CHANGED]: (state, { payload }) => ({
    ...state, bitrate: payload,
  }),
}, initialState);

