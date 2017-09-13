import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Broadcasting';
import Broadcasting from './Broadcasting';

const mapStateToProps = state => ({
  status: state.player.status,
  bitrate: state.broadcasting.bitrate,
  nav: state.navigation,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Broadcasting);
