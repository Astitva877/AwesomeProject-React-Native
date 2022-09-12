import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MyClients from '../Screens/MyClients';
import MyBooking from '../Screens/MyBooking';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
            } else if (route.name === 'My Booking') {
              iconName = focused
                ? 'clipboard-text-outline'
                : 'clipboard-text-outline';
            } else if (route.name === 'My Clients') {
              iconName = focused
                ? 'clipboard-minus-outline'
                : 'clipboard-minus-outline';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Clients" component={MyClients} />
        <Tab.Screen
          name="My Booking"
          component={MyBooking}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
