/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Component } from 'react';
import type { Node } from 'react';
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
// import React, { Component } from 'react'; 
import { Constants } from 'expo';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import PasswordInputText from 'react-native-hide-show-password-input';

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

// const App = () => {

//   return (

//     <View style={styles.container}>
//       {/* <View style = {styles.new}> */}
//       <Button
//         title="Press me"
//         onPress={() => Alert.alert('Alert, You have pressed the button')}

//       />
//       {/* </View> */}

//       <TouchableOpacity onPress={() => Alert.alert('Alert, You have Viewed')}  style={styles.title}>

//       </TouchableOpacity>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center'
//   },
//   // new: { 
//   //   flexDirection: 'column', 
//   //   // alignContent: 'center'
//   // },
//   title: {

//     // flexDirection: 'column',
//     width: '50%', 
//     height: '50%', 
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center'


//   },
// }) 


const App = () => {
  const [userText, onChangeUserText] = useState('')
  const [useremail, onChangeEmail] = useState('')
  const [userpassword, onChangePassword] = useState('')
  const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyec8yHZI4AVsecsE-qWYfB5s8heOrxcWGdQ&usqp=CAU" };


  return (
    <ImageBackground source={image} style={styles.container}>
      <Text style={styles.form}> Registration Form </Text>

      <View style={styles.set} >
        <Text style={styles.border}> Enter Your Name:- </Text>
        <TextInput
          onChangeText={text => onChangeUserText(text)}
          value={userText}
          placeholder="Type Your Name"
        />
      </View>
      <View style={styles.set}>
        <Text style={styles.border}> Enter Your Email:- </Text>
        <TextInput
          onChangeText={Email => onChangeEmail(Email)}
          value={useremail}
          placeholder="Type Your Email"
        />
      </View>
      <View style={styles.set}>
        <Text style={styles.border}> Enter Your Password:- </Text>
        <TextInput
          onChangeText={onChangePassword}
          value={userpassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>
      {/* <PasswordInputText
        style={styles.input}
        onChangeText={onChangePassword}
        value={userpassword}
        placeholder="Enter your password"

      /> */}

      {/* <Button style={styles.click}
        title="Submit"
        onPress={() => Alert.alert(`Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`)}
      />  

       */}

      <TouchableOpacity onPress={() => Alert.alert(`Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`)} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Submit</Text>
        {/* onPress =  */}
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  appButtonContainer: {
    backgroundColor: "cyan",
    borderRadius: 40, 
    width: '60%', 
    height: '10%',  
    alignItems: 'center',  
    justifyContent: 'center', 
  },
  appButtonText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  border: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  form: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  set: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
  }
}
);


export default App;




// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       info: '',
//       inputCount: 3,
//       data: [{ name: 'input1' }, { name: 'input2' }, { name: 'input3' }],
//     };
//     this.inputRefs = {};
//   }

//   onAddMore() {
//     const newData = this.state.data;
//     newData.push({ name: `input${this.state.inputCount + 1}` });
//     this.setState(prevState => ({
//       inputCount: prevState.inputCount + 1,
//       data: newData,
//     }));
//   }

//   _onChangeText(text, inputName) {
//     console.log('Input Name:', inputName, text);
//     console.log("Inout's Ref:", this.inputRefs[inputName]);
//     const info = `${this.state.info}\n\r${inputName} changed text`;
//     this.setState({
//       info
//     });
//   }

//   _onChange(event, inputName) {
//     console.log('Input Name:', inputName);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.data.map(d => (
//           <View style={styles.inputWrapper} key={d.name}>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => { this._onChangeText(text, d.name); }}
//               onChange={(event) => { this._onChange(event, d.name); }}
//               ref={ref => {
//                 this.inputRefs[d.name] = ref;
//               }}
//               defaultValue={d.name}
//             />
//           </View>
//         ))}
//         <Button
//           onPress={this.onAddMore.bind(this)}
//           title="Add More"
//           color="#841584"
//         />
//         <TextInput
//           multiline={true}
//           editable={false}
//           style={styles.info}>
//             {this.state.info}
//           </TextInput>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#F2F2F2',
//   },
//   info: {
//     flex: 0.5,
//   },
//   inputWrapper: {
//     backgroundColor: 'yellow',
//     marginTop: 5,
//     marignBottom: 5,
//     marginLeft: 5,
//     marginRight: 5,
//   },
//   input: {
//     height: 55,
//     paddingLeft: 15,
//     paddingRight: 5,
//     paddingTop: 5,
//     paddingBottom: 5,
//   },
// });