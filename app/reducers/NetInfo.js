import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
  connectionType: null,
};

export default handleActions({
  [types.CONNECTION_STATE_CHANGED]: (state, { payload }) => ({
    ...state, connectionType: payload,
  }),
}, initialState);
