import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
  connectionType: null,
  isAllowedToStream: false,
};

export default handleActions({
  [types.CONNECTION_STATE_CHANGED]: (state, { payload }) => {
    console.log(payload);
  },
}, initialState);
