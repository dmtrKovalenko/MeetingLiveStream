import React from 'react';
import HR from './index';

const styles = {
  divider: {
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 8,
  },
  dividerLine: {
    height: 0.3,
    backgroundColor: 'rgba(0,0,0,14)',
  },
};

const Divider = () => <HR style={styles.divider} lineStyle={styles.dividerLine} />;

export default Divider;
