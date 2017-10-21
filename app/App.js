import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import { Spinner } from 'native-base';

import Navbar from './layouts/Header/Header';
import SideBar from './layouts/SideBar/SideBar';
import Settings from './routes/Settings/SettingsContainer';
import Broadcasting from './routes/Broadcasting/BroadcastingContainer';
import { rehydrateSettings } from './actions/Settings';
import { checkConnection } from './actions/NetInfo';

const getSceneStyle = () => ({
  backgroundColor: '#fff',
});

export class Routes extends Component {
  static propTypes = {
    rehydrateSettings: PropTypes.func,
    checkConnection: PropTypes.func,
    settingsInitialized: PropTypes.bool,
  }

  componentWillMount = () => {
    this.props.rehydrateSettings();
    this.props.checkConnection();
  }

  render() {
    // ToDo add splash page
    if (!this.props.settingsInitialized) {
      return <Spinner />;
    }

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

const mapStateToProps = state => ({
  settingsInitialized: state.settings.initialized,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  rehydrateSettings,
  checkConnection,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
