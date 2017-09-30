import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Broadcasting';
import { isAllowedToStream } from '../../actions/Settings';
import Broadcasting from './Broadcasting';

const mapStateToProps = state => ({
  status: state.player.status,
  currentTime: state.player.currentTime,
  bitrate: state.broadcasting.bitrate,
  settings: state.settings,
  connectionStatus: state.netInfo.connectionType,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
  isAllowedToStream,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Broadcasting);
