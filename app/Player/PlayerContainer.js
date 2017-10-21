import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Player from './Player';
import * as actions from '../actions/Player';
import * as statuses from '../constants/PlayerStatuses';
import { isAllowedToStream } from '../actions/Settings';

const mapStateToProps = ({ player, settings }) => ({
  status: player.status,
  isPlaying: player.status === statuses.PLAYING,
  toAutoReconnect: settings.autoreconnect,
  reconnectTimeout: settings.reconnectTimeout,
  autoplay: settings.autoplay,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
  isAllowedToStream,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
