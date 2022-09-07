import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
// import Icon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from '@rneui/themed';
const MyBooking = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.15,
          backgroundColor: 'red',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: '6%',
            marginTop: '2%',
          }}>
          <View style={{height: '100%', width: '70%'}}>
            <Text style={{fontSize: 18, color: '#ffffff'}}>Hi John</Text>
            <Text style={{fontSize: 12, color: '#ffffff'}}>
              Monday, 1 Jun 2021
            </Text>
          </View>
          <View style={{height: '100%', width: '30%', alignItems: 'center'}}>
            <Image
              source={require('../assets/qr-code.png')}
              style={styles.logoStyle}
            />
          </View>
        </View>
        <View>
          <SearchBar
            containerStyle={{borderColor: 'white', borderRadius: 20}}
            lightTheme={true}
            placeholder="Type Here..."
            onChangeText={undefined}
          />
        </View>
      </View>
      <View style={{flex: 0.85, alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: '50%',
            marginTop: '10%',
            // backgroundColor: 'blue',
            elevation: 1,
            // borderRadius: 10,
          }}>
          <View style={{height: '50%', width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: '50%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '70%',
                  height: '100%',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: '90%', width: '35%', borderRadius: 50}}
                  resizeMode="contain"
                  source={require('../assets/download.jpg')}
                />
                <Text> Daniel Austin </Text>
              </View>
              <View
                style={{
                  // flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '30%',
                  height: '100%',
                  // alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.cancelStyle}>
                  <Text style={{color: 'white'}}> Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptStyle}>
                  <Text style={{color: 'white'}}> Accept </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{height: '50%', width: '100%', justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  height: '50%',
                  width: '100%',
                  justifyContent: 'space-between',
                  marginTop: '20%',
                }}>
                <View>
                  {/* <Icon name="location" /> */}
                  <Text> 4.5 Km </Text>
                </View>
                <View>
                  <Text> 4 mins </Text>
                </View>
                <View>
                  <Text> $7.00 </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: '40%',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <Text> Date & Time </Text>
                <Text> Dec,20 2022 | 10:00 AM </Text>
              </View>
              <View style={{height: '50%', width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    height: '50%',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: '100%', width: '45%', borderRadius: 30}}
                    resizeMode="contain"
                    source={require('../assets/address.png')}
                  />
                  <View>
                    <Text> Pickup Address </Text>
                    <Text style={{fontSize: 10}}>35, Oak, Antive TN 37013</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    height: '50%',
                    width: '100%',
                    alignItems: 'center',
                    marginTop: '10%',
                  }}>
                  <Image
                    style={{height: '100%', width: '45%', borderRadius: 30}}
                    resizeMode="contain"
                    source={require('../assets/yellow.png')}
                  />
                  <View>
                    <Text> Destination Address </Text>
                    <Text style={{fontSize: 10}}>
                      25, State, St. Dolphine TN 37013
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyBooking;

const styles = StyleSheet.create({
  logoStyle: {
    height: '70%',
    width: '50%',
  },
  cancelStyle: {
    height: '30%',
    width: '60%',
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  acceptStyle: {
    height: '30%',
    width: '60%',
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
  },
});
