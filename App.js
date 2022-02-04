/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

// const App = () => {
//   const [text, onChangeText] = React.useState("Useless Text");
//   const [number, onChangeNumber] = React.useState(null); }

// const App: () => Node = () => { 
//   return 
//   ( <Text style={styles.titleText}>
//     Hello, World!
//     </Text>

//   );

// };

// const styles = StyleSheet.create({

//   titleText: {
//     fontSize: 20,
//     fontWeight: "bold"
//   },
// }); ,



// const App = () => {
//   const [userText, onChangeUserText] = useState('')
//   return ( 
//     <View>
//     <TextInput
//     style={styles.input}
//     onChangeText= {text => onChangeUserText(text)}
//     value={userText}

//     />  
//     <Button
//         title="Press me"
//         onPress={() => Alert.alert(`${userText}`)}
//       />
//  </View> 
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },

// } 
// ); 

// const App = () => {
//     return ( 
//      <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={require('./src/assets/sampleimage.jpg')}
//       />
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://miro.medium.com/max/1400/1*xDi2csEAWxu95IEkaNdFUQ.png'
//         }}
//       />
//        </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: { 
//       flex: 1,
//       alignItems: 'center', 
//       justifyContent: 'space-evenly'
//     },
//     tinyLogo: {
//       width: 200,
//       height: 200,
//       // alignItems: "flex-start"


//     },
//   }); 

const App = () => {


  // onPress = () => {
  //   this.setState({
  //     Alert.alert('Alert, You have Viewed')
  //   )},
  // };


  return (


    <View style={styles.container}>
      {/* <View style = {styles.new}> */}
      <Button
        title="Press me"
        onPress={() => Alert.alert('Alert, You have pressed the button')}

      />
      {/* </View> */}

      <TouchableOpacity onPress={() => Alert.alert('Alert, You have Viewed')}  style={styles.title}>
        
      </TouchableOpacity>
    </View>

    // <View style={{
    //   width: 100, height: 100, backgroundColor: 'skyblue'
    // }} />

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  // new: { 
  //   flexDirection: 'column', 
  //   // alignContent: 'center'
  // },
  title: {

    // flexDirection: 'column',
    width: '50%', 
    height: '50%', 
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'


  },
})
export default App;
