import { createAction } from 'redux-actions';
import * as types from '../actionTypes';
import { remoteStreamUrl } from '../config/project.config';

export const currentTime = createAction(types.CURRENT_TIME_CHANGED);

export const bitrateChanged = createAction(types.BITRATE_CHANGED);

export const checkBitrate = () => (dispatch) => {
  fetch(remoteStreamUrl, { method: 'HEAD' })
    .then((response) => {
      const bitrateHeader = response.headers.get('icy-br');

      dispatch(bitrateChanged(Number(bitrateHeader)));
    })
    .catch(console.log);
};
