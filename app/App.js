import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Scene } from 'react-native-router-flux';

import Navbar from './layouts/Header/Header';
import SideBar from './layouts/SideBar/SideBar';
import Settings from './routes/Settings/SettingsContainer';
import Broadcasting from './routes/Broadcasting/BroadcastingContainer';
import { rehydrateSettings } from './actions/Settings';

const getSceneStyle = () => ({
  backgroundColor: '#fff',
});

export class Routes extends Component {
  static propTypes = {
    rehydrateSettings: PropTypes.func,
  }

  componentWillMount = () => {
    this.props.rehydrateSettings();
  }

  render() {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Scene key="drawer" drawer contentComponent={SideBar} navBar={Navbar}>
          <Scene key="broadcasting" component={Broadcasting} title="Трансляция" initial />
          <Scene key="settings" component={Settings} title="Настройки" />
        </Scene>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  rehydrateSettings,
}, dispatch);

export default connect(null, mapDispatchToProps)(Routes);
