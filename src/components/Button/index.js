/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// Style
import styles from './Button.style';

class Button extends PureComponent {
  static defaultProps = {
    onPress: () => {},
    testID: 'button',
  };

  static propTypes = {
    onPress: PropTypes.func,
    testID: PropTypes.string,
  };

  render() {
    const { onPress, testID } = this.props;
    return (
      <TouchableOpacity onPress={onPress} testID={testID}>
        <View style={styles.container}>
          <Text style={styles.text}>Button</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
