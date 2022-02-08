import React, {useState, Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  TextPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import App from '../../App';

const SocialIcon = props => {
  return (
    <TouchableOpacity>
      <Image source={props.icon} style={styles.buttonImageIconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonImageIconStyle: {
    marginHorizontal: 10,
    height: 25,
    width: 25,
    borderRadius: 10,
  },
});
export default SocialIcon;
