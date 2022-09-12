import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '@rneui/base';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const MyBooking = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.23,
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
        <View style={{width: '100%', alignItems: 'center', height: '6%'}}>
          <Input
            containerStyle={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 30,
            }}
            rightIcon={<Octicons name="arrow-left" size={25} color={'black'} />}
          />
        </View>
      </View>
      <View style={{flex: 0.77, alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: '60%',
            marginTop: '10%',
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 20,
            paddingTop: 10,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
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
                  justifyContent: 'space-evenly',
                  marginTop: '20%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Octicons name="location" size={20} />
                  <Text style={styles.textSize}> 4.5 Km </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Octicons name="clock" size={20} />
                  <Text style={styles.textSize}> 4 mins </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons name="cash" size={20} />
                  <Text style={styles.textSize}> $7.00 </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: '40%',
                  width: '100%',
                  justifyContent: 'space-evenly',
                }}>
                <Text style={styles.textSize}> Date & Time </Text>
                <Text style={styles.textSize}> Dec,20 2022 | 10:00 AM </Text>
              </View>
              <View
                style={{
                  height: '80%',
                  width: '100%',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    height: '50%',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons
                    name={'my-location'}
                    size={28}
                    color={'yellow'}
                  />
                  <View style={{marginRight: 28}}>
                    <Text style={{color: 'black'}}>Pickup Address </Text>
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
                  <MaterialIcons
                    name={'location-on'}
                    size={28}
                    color={'yellow'}
                  />
                  <View>
                    <Text style={{color: 'black'}}>Destination Address </Text>
                    <Text style={{fontSize: 10}}>
                      25, State, St. Dolphine TN 37013
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <MaterialCommunityIcons
                    name={'chevron-up'}
                    size={25}
                    color={'black'}
                  />
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
  textSize: {fontSize: 15},
});
