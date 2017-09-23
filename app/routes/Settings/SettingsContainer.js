import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Settings from './Settings';
import { setSettingItem } from '../../actions/Settings';

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSettingItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
