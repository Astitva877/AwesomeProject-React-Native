/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  Pressable,
  Alert,
  TouchableOpacity,
  TextPropTypes,
  Modal,
  Linking,
} from 'react-native';
// import { CheckBoxProps} from '@react-native-community/checkbox';
import {Icon} from 'react-native-elements';
// import Modal from 'react-native-modal';
// import React, { Component } from 'react';
import {Constants} from 'expo';
import {
  Colors, // jbhkjhbkj
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import PasswordInputText from 'react-native-hide-show-password-input';
import RoundButton from './src/assets/RoundButton';
import EditText from './src/assets/EditText';
import PropTypes from 'prop-types';

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

// const App = () => {
//   const [userText, onChangeUserText] = useState('')
//   const [useremail, onChangeEmail] = useState('')
//   const [userpassword, onChangePassword] = useState('')
//   const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyec8yHZI4AVsecsE-qWYfB5s8heOrxcWGdQ&usqp=CAU" };

//   return (
//     <ImageBackground source={image} style={styles.container}>
//       <Text style={styles.form}> Registration Form </Text>

//       <View style={styles.set} >
//         <Text style={styles.border}> Enter Your Name:- </Text>
//         <TextInput
//           onChangeText={text => onChangeUserText(text)}
//           value={userText}
//           placeholder="Type Your Name"
//         />
//       </View>
//       <View style={styles.set}>
//         <Text style={styles.border}> Enter Your Email:- </Text>
//         <TextInput
//           onChangeText={Email => onChangeEmail(Email)}
//           value={useremail}
//           placeholder="Type Your Email"
//         />
//       </View>
//       <View style={styles.set}>
//         <Text style={styles.border}> Enter Your Password:- </Text>
//         <TextInput
//           onChangeText={onChangePassword}
//           value={userpassword}
//           placeholder="Enter your password"
//           secureTextEntry={true}
//         />
//       </View>
//       {/* <PasswordInputText
//         style={styles.input}
//         onChangeText={onChangePassword}
//         value={userpassword}
//         placeholder="Enter your password"

//       /> */}

//       {/* <Button style={styles.click}
//         title="Submit"
//         onPress={() => Alert.alert(`Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`)}
//       />

//        */}

//       <TouchableOpacity onPress={() => Alert.alert(`Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`)} style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//         {/* onPress =  */}
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// };
// const styles = StyleSheet.create({
//   container:
//   {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   appButtonContainer: {
//     backgroundColor: "cyan",
//     borderRadius: 40,
//     width: '60%',
//     height: '10%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   appButtonText: {
//     fontSize: 15,
//     color: "black",
//     fontWeight: "bold",
//   },
//   border: {
//     fontSize: 20,
//     color: 'black',
//     fontWeight: 'bold'
//   },
//   form: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   set: {
//     width: '90%',
//     borderWidth: 1,
//     borderColor: 'black',
//   }
// }
// );

// const App = () => {

//   return (
//     <View style={styles.container}>
//       {/* <TouchableOpacity onPress={() => Alert.alert('Asia')} style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Alert.alert(`Europe`)} style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Alert.alert(`North America`)} style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Alert.alert(`Africa`)} style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Alert.alert(`South America`)} style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//       </TouchableOpacity> */}
//       <RoundButton onPress ={() => Alert.alert('You are in Asia')} content= 'Asia'/>
//       <RoundButton onPress ={() => Alert.alert('Welcome to Europe')}  content= 'Europe'/>
//       <RoundButton onPress ={() => Alert.alert('Worlds most colest place is Antartica')} content= 'Antartica'/>
//       <RoundButton onPress ={() => Alert.alert('Africa is awesome')} content= 'Africa'/>
//       <RoundButton onPress ={() => Alert.alert('Australia has kangaroos')}  content= 'Australia'/>
//     </View>
//   );

// };
// const styles = StyleSheet.create({
//   container:
//   {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   appButtonContainer: {
//     backgroundColor: "cyan",
//     borderRadius: 40,
//     width: '40%',
//     height: '8%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   appButtonText: {
//     fontSize: 13,
//     color: "black",
//     fontWeight: "bold",
//   },
// }
// );

// const App = () => {
//   const [userText, onChangeUserText] = useState('');
//   const [useremail, onChangeEmail] = useState('');
//   const [userpassword, onChangePassword] = useState('');
//   const image = {
//     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyec8yHZI4AVsecsE-qWYfB5s8heOrxcWGdQ&usqp=CAU',
//   };

//   return (
//     <ImageBackground source={image} style={styles.container}>
//       <Text style={styles.form}> Registration Form </Text>
//       <EditText
//         heading="Name"
//         onChange={text => onChangeUserText(text)}
//         cont={userText}
//       />
//       <EditText
//         heading="Email"
//         onChange={Email => onChangeEmail(Email)}
//         cont={useremail}
//       />
//       <EditText
//         heading="Password"
//         onChange={Passowrd => onChangePassword(Passowrd)}
//         cont={userpassword}
//         secu={true}
//       />
//       <TouchableOpacity
//         onPress={() =>
//           Alert.alert(
//             `Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`,
//           )
//         }
//         style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   appButtonContainer: {
//     backgroundColor: '#00FF00',
//     borderRadius: 40,
//     width: '60%',
//     height: '10%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   appButtonText: {
//     fontSize: 15,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   form: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>

//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,

//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     // padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     height: '40%',
//     width: '60%',
//     justifyContent: 'center',

//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default App;

const App = () => {
  const [userText, onChangeUserText] = useState('');
  const [useremail, onChangeEmail] = useState('');
  const [userpassword, onChangePassword] = useState('');
  const image = {
    uri: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/153532-abstract-black-blue-and-purple-background-design.jpg?w=800&q=95',
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://img.lovepik.com/freepng/21/67/26/35q58PICcu33q58PICcexzs758PIC_PIC2018.png_wh300.png',
          }}
          style={styles.locationimage}
        />
        <Text style={styles.text}>Vision Go</Text>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.form}>Registration Form</Text>
        </View>
        <EditText
          heading="Enter Your Name:-"
          onChange={text => onChangeUserText(text)}
          cont={userText}
          placename="Type Your Name"
        />
        <EditText
          heading="Enter Your Email"
          onChange={Email => onChangeEmail(Email)}
          cont={useremail}
          placename="Type Your Email address"
        />
        <EditText
          heading="Enter Your Password"
          onChange={Passowrd => onChangePassword(Passowrd)}
          cont={userpassword}
          secu={true}
          placename="Type Your Password"
        />
        <RoundButton
          onPress={() =>
            Alert.alert(
              `Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`,
            )
          }
          content="Submit"
        />
        <View style={styles.icondesign}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
              }}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://parentzone.org.uk/sites/default/files/Instagram%20logo_0.jpg',
              }}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://www.facebook.com/images/fb_icon_325x325.png',
              }}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // elevation: 1,
  },
  border: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  form: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  set: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: 'black',
    borderBottomWidth: 1,
  },
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
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  icondesign: {
    flexDirection: 'row',
  },
  buttonImageIconStyle: {
    marginHorizontal: 10,
    height: 25,
    width: 25,
    borderRadius: 10,
  },
  locationimage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});
export default App;
