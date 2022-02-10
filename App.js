import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native';
// import { CheckBoxProps} from '@react-native-community/checkbox';
// import {Icon} from 'react-native-elements';
// // import Modal from 'react-native-modal';
// import {Constants} from 'expo';
// import {
//   Colors, // jbhkjhbkj
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
// import PasswordInputText from 'react-native-hide-show-password-input';
// import RoundButton from './src/assets/RoundButton';
// import EditText from './src/assets/EditText';
// import PropTypes from 'prop-types';
// import SocialIcon from './src/assets/SocialIcon';
// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

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

// const App = () => {
//   const [userText, onChangeUserText] = useState('');
//   const [useremail, onChangeEmail] = useState('');
//   const [userpassword, onChangePassword] = useState('');
//   const image = {
//     uri: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/153532-abstract-black-blue-and-purple-background-design.jpg?w=800&q=95',
//   };
//   const twitter = {
//     uri: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
//   };
//   const fb = {
//     uri: 'https://parentzone.org.uk/sites/default/files/Instagram%20logo_0.jpg',
//   };
//   const insta = {
//     uri: 'https://www.facebook.com/images/fb_icon_325x325.png',
//   };
//   return (
//     <ImageBackground source={image} style={styles.image}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: 'https://img.lovepik.com/freepng/21/67/26/35q58PICcu33q58PICcexzs758PIC_PIC2018.png_wh300.png',
//           }}
//           style={styles.locationimage}
//         />
//         <Text style={styles.text}>Vision Go</Text>
//       </View>

//       <View style={styles.content}>
//         <View>
//           <Text style={styles.form}>Registration Form</Text>
//         </View>
//         <EditText
//           heading="Enter Your Name:-"
//           onChange={text => onChangeUserText(text)}
//           cont={userText}
//           placename="Type Your Name"
//         />
//         <EditText
//           heading="Enter Your Email"
//           onChange={Email => onChangeEmail(Email)}
//           cont={useremail}
//           placename="Type Your Email address"
//         />
//         <EditText
//           heading="Enter Your Password"
//           onChange={Passowrd => onChangePassword(Passowrd)}
//           cont={userpassword}
//           secu={true}
//           placename="Type Your Password"
//         />
//         <RoundButton
//           onPress={() =>
//             Alert.alert(
//               `Name: ${userText}, Email: ${useremail}, Password: ${userpassword}`,
//             )
//           }
//           content="Submit"
//         />
//         <View style={styles.icondesign}>
//           <TouchableOpacity>
//             <Image
//               source={{
//                 uri: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
//               }}
//               style={styles.buttonImageIconStyle}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{
//                 uri: 'https://parentzone.org.uk/sites/default/files/Instagram%20logo_0.jpg',
//               }}
//               style={styles.buttonImageIconStyle}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{
//                 uri: 'https://www.facebook.com/images/fb_icon_325x325.png',
//               }}
//               style={styles.buttonImageIconStyle}
//             />
//           </TouchableOpacity>
//           {/* <SocialIcon icon={twitter} />
//           <SocialIcon icon={insta} />
//           <SocialIcon icon={fb} /> */}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.3,
//     color: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     flex: 1,
//   },
//   content: {
//     flex: 0.7,
//     backgroundColor: 'white',
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     // elevation: 1,
//   },
//   border: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   form: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'black',
//   },
// set: {
//   width: '90%',
//   // borderWidth: 1,
//   // borderColor: 'black',
//   borderBottomWidth: 1,
// },
// appButtonContainer: {
//   backgroundColor: 'cyan',
//   borderRadius: 40,
//   width: '40%',
//   height: '8%',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// appButtonText: {
//   fontSize: 12,
//   color: 'black',
//   fontWeight: 'bold',
// },
// text: {
//   color: 'white',
//   fontSize: 30,
//   fontWeight: 'bold',
// },
// icondesign: {
//   flexDirection: 'row',
// },
// buttonImageIconStyle: {
//   marginHorizontal: 10,
//   height: 25,
//   width: 25,
//   borderRadius: 10,
// },
//   locationimage: {
//     height: 80,
//     width: 80,
//     borderRadius: 50,
//   },
// });
// export default App;

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         // horizontal
//         // inverted

//         data={[
//           {new: 'India'},
//           {new: 'Austrlia'},
//           {new: 'Nepal'},
//           {new: 'USA'},
//           {new: 'Uk'},
//           {new: 'Russian Fedration'},
//           {new: 'Serbia'},
//           {new: 'Turkey'},
//           {new: 'China'},
//           {new: 'Taiwan'},
//           {new: 'India'},
//           {new: 'Austrlia'},
//           {new: 'Nepal'},
//           {new: 'USA'},
//           {new: 'Uk'},
//           {new: 'Russian Fedration'},
//           {new: 'Serbia'},
//           {new: 'Turkey'},
//           {new: 'China'},
//           {new: 'Taiwan'},
//         ]}
//         numColumns={2}
//         renderItem={({item}) => <Text style={styles.item}>{item.new}</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //  paddingTop: 22
//     margin: 2,
//     // numColumns: 2,
//   },
//   item: {
//     // padding: 10,
//     fontSize: 20,
//     height: 90,
//     width: 100,
//     // numColumns: 2,
//   },
// });

// export default App;

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {name: 'Custom Detail header'})
        }
      />
      <Button
        title="Go to Tab Bar"
        onPress={() => navigation.navigate('TabBar', {name: 'Tab Bar header'})}
      />
      {/* <Button
        title="Go to Drawer Bar"
        onPress={() =>
          navigation.navigate('DrawerBar', {name: 'Drawer Bar header'})
        }
      /> */}
    </View>
  );
};

const TabBarScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Tab Bar Screen</Text>
      <Tab.Navigator>
        <Tab.Screen name="CreatePost" component={CreatePostScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
};

// const DrawerBarScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1}}>
//       <Text> Drawer bar Screen </Text>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </View>
//   );
// };

// const NotificationsScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// };

const DetailsScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Cricket Screen"
        onPress={() => {
          navigation.navigate('Cricket', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
};

const CricketScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cricket Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Cricket screen again..."
        onPress={() =>
          navigation.push('Cricket', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'something new',
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        onPress={() =>
          navigation.navigate('Profile', {
            friends: ['Brent', 'Satya', 'Michaś'],
            title: "Brent's Profile",
          })
        }
        title="Go to Brent's profile"
      />
    </View>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Text>Friends: </Text>
      <Text>{route.params.friends[0]}</Text>
      <Text>{route.params.friends[1]}</Text>
      <Text>{route.params.friends[2]}</Text>
      <Button
        onPress={() =>
          navigation.setParams({
            friends:
              route.params.friends[0] === 'Brent'
                ? ['Wojciech', 'Szymon', 'Jakub']
                : ['Brent', 'Satya', 'Michaś'],
            title:
              route.params.title === "Brent's Profile"
                ? "Lucy's Profile"
                : "Brent's Profile",
          })
        }
        title="Swap title and friends"
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const CreatePostScreen = ({navigation, route}) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Details',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
};

const LogoTitle = () => {
  return (
    <Image
      style={{width: 250, height: 40}}
      source={{
        uri: 'https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80',
      }}
    />
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My home'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Cricket"
          component={CricketScreen}
          options={{
            headerStyle: {
              backgroundColor: 'wheat',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />
        <Stack.Screen name="TabBar" component={TabBarScreen} />
        {/* <Stack.Screen name="DrawerBar" component={DrawerBarScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
