import React, {useState, Component} from 'react';
import type {Node} from 'react';
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
} from 'react-native';

const RoundButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{props.content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: 'cyan',
    borderRadius: 40,
    width: '40%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default RoundButton;
