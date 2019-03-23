/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { View, ConnectionStatusBar } from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import translate from './src/translations';
import { Button } from './src/components';

export default class App extends PureComponent {
  static propTypes = {
    instructions: PropTypes.string,
  };

  static defaultProps = {
    instructions: Platform.select({
      ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
      android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _onPressButton = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container} useSafeArea>
        <View style={styles.inner}>
          <ConnectionStatusBar
            style={{ backgroundColor: 'green' }}
            allowDismiss
          />
          {visible && (
            <Text testID="welcome" style={styles.welcome}>
              {translate('welcome')}
            </Text>
          )}
          <Button testID="btn_show" onPress={this._onPressButton} />
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{this.props.instructions}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
