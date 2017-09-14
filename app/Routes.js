import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import Navbar from './layouts/Header/Header';
import SideBar from './layouts/SideBar/SideBar';

import Settings from './routes/Settings/Settings';
import Broadcasting from './routes/Broadcasting/BroadcastingContainer';

const getSceneStyle = () => ({
  backgroundColor: '#fff',
});

export default () => (
  <Router getSceneStyle={getSceneStyle}>
    <Scene key="drawer" drawer contentComponent={SideBar} navBar={Navbar} type={ActionConst.REPLACE}>
      <Scene key="broadcasting" component={Broadcasting} title="Трансляция" initial />
      <Scene key="settings" component={Settings} title="Настройки" />
    </Scene>
  </Router>
);
