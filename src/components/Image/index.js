/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Style
import styles from './Image.style';

class Image extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <View style={styles.container} />;
  }
}

export default Image;
