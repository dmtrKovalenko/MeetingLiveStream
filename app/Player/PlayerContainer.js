import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Player from './Player';
import * as actions from '../actions/Player';
import * as statuses from '../constants/PlayerStatuses';

const mapStateToProps = ({ player }) => ({
  status: player.status,
  isPlaying: player.status === statuses.PLAYING,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
