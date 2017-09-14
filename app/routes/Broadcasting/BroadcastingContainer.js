import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Broadcasting';
import Broadcasting from './Broadcasting';

const mapStateToProps = state => ({
  status: state.player.status,
  currentTime: state.player.currentTime,
  bitrate: state.broadcasting.bitrate,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Broadcasting);
