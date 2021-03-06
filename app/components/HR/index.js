import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const styles = {
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0,0,0,54)',
  },
  text: {
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
};

class Hr extends Component {
  constructor(props) {
    super(props);

    this.renderLine = this.renderLine.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderInner = this.renderInner.bind(this);
  }

  renderLine(key) {
    return <View key={key} style={[styles.line, this.props.lineStyle]} />;
  }

  renderText(key) {
    return (
      <View key={key}>
        <Text style={[styles.text, this.props.textStyle]}> {this.props.text} </Text>
      </View>
    );
  }

  renderInner() {
    if (!this.props.text) {
      return this.renderLine();
    }

    return [
      this.renderLine(1),
      this.renderText(2),
      this.renderLine(3),
    ];
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderInner()}
      </View>
    );
  }
}

Hr.propTypes = {
  lineStyle: PropTypes.shape({}),
  text: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

export default Hr;
