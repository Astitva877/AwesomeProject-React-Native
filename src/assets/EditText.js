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

Component.propTypes = {
  secu: PropTypes.bool,
  heading: PropTypes.string,
};

const EditText = props => {
  // const [userText, onChangeUserText] = useState('')
  // const [useremail, onChangeEmail] = useState('')
  // const [userpassword, onChangePassword] = useState('')
  // const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyec8yHZI4AVsecsE-qWYfB5s8heOrxcWGdQ&usqp=CAU" };

  return (
    <View style={styles.set}>
      <Text style={styles.border}> {props.heading} </Text>
      <TextInput
        onChangeText={props.onChange}
        value={props.cont}
        secureTextEntry={props.secu} 
        placeholder={props.placename}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  set: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: 'black',
    borderBottomWidth: 1,
  },
});

export default EditText;
