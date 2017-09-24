import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Picker } from 'react-native';
import { List, Text, Toast } from 'native-base';

import styles from './styles';
import Item from './components/SettingsListItem';
import SwitchItem from './components/SettingsSwitchItem';
import Divider from '../../components/HR/Divider';
import { cancelAllNotifications } from '../../utils/NotificationsManager';

export default class SettingsPage extends Component {
  static propTypes = {
    settings: PropTypes.shape({
      autoplay: PropTypes.bool,
      mobileConnection: PropTypes.bool,
      autoreconnect: PropTypes.bool,
      reconnectTimeout: PropTypes.number,
      showNotifications: PropTypes.bool,
      trafficControl: PropTypes.bool,
    }),
    setSettingItem: PropTypes.func,
  }

  shouldComponentUpdate = nextProps => (
    this.props.settings !== nextProps.settings
  )

  changeTimeoutValue = value => this.props.setSettingItem('reconnectTimeout', value)

  clearNotifications = () => {
    cancelAllNotifications();
    Toast.show({
      text: 'Уведомления очищены',
      position: 'bottom',
      duration: 2000,
    });
  }

  render() {
    return (
      <ScrollView>
        <List style={styles.list}>
          <SwitchItem
            settingsKey="mobileConnection"
            value={this.props.settings.mobileConnection}
            onChange={this.props.setSettingItem}
            title="Воспроизводить через мобильный интернет"
            subtitle="Может взыматься плата за соединение"
          />

          <SwitchItem
            settingsKey="trafficControl"
            value={this.props.settings.trafficControl}
            onChange={this.props.setSettingItem}
            title="Счетчик трафика"
            subtitle="Показывать счетчик трафика трансляции"
          />

          <SwitchItem
            settingsKey="autoplay"
            value={this.props.settings.autoplay}
            onChange={this.props.setSettingItem}
            title="Автовоспроизведение"
            subtitle="Воспроизводить сразу после подключения"
          />

          <Divider />
          <Text style={styles.sectionTitle}> Автопереподключение </Text>

          <SwitchItem
            settingsKey="autoreconnect"
            value={this.props.settings.autoreconnect}
            onChange={this.props.setSettingItem}
            title="Автопереподключение"
            subtitle="При ошибке автоматически переподключаться"
          />

          <Item
            title="Переподключаться каждые"
            style={styles.pickerItem}
          >
            <View style={styles.picker}>
              <Picker
                disabled={!this.props.settings.autoreconnect}
                mode="dropdown"
                onValueChange={this.changeTimeoutValue}
                selectedValue={this.props.settings.reconnectTimeout}
              >
                <Picker.Item label="2 c" value={2} />
                <Picker.Item label="3 c" value={3} />
                <Picker.Item label="5 c" value={5} />
                <Picker.Item label="10 c" value={10} />
              </Picker>
            </View>
          </Item>

          <Divider />
          <Text style={styles.sectionTitle}> Уведомления </Text>

          <SwitchItem
            settingsKey="showNotifications"
            value={this.props.settings.showNotifications}
            onChange={this.props.setSettingItem}
            title="Отображать статус трансляции"
            subtitle="Показывать уведомление с текущим статусом трансляции"
          />

          <Item
            title="Очистить все уведомления"
            onPress={this.clearNotifications}
          />
        </List>
      </ScrollView>
    );
  }
}
