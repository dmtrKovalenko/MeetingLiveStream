import React from 'react';
import debounce from 'debounce';

// Should be overrided with method render
export default class DebouncedRenderer extends React.Component {
  state = { ...this.props }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.updateImmediate
        ? this.updateState()
        : this.debouncedUpdate();
    }
  }

  updateState = () => this.setState({ ...this.props });

  debouncedUpdate = debounce(this.updateState, 1000)
}
