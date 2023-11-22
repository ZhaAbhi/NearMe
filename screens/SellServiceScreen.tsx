import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import ElectricalImage from '../assets/NearMe-Assets/Electricians.jpeg';

const SellServiceScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: 'black'}}>
          Want to help the community?
        </Text>
        <Text style={{fontSize: 16, color: 'black'}}>Sell your service</Text>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'orange',
            width: '30%',
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Join Now
          </Text>
        </View>
        <View
          style={{height: 0.3, backgroundColor: 'black', marginTop: 20}}></View>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 17}}>Hooray, You got an order!</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            source={ElectricalImage}
            style={{height: 70, width: 70, borderRadius: 10}}
          />
          <View style={{marginLeft: 5, flex: 1}}>
            <Text style={{marginBottom: 5, fontSize: 15}}>
              Description: I want to repair my bathroom
            </Text>
            <Text style={{marginBottom: 5, fontSize: 15}}>Bid: 500 rupees</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  padding: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginRight: 20,
                  borderRadius: 25,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  padding: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginRight: 20,
                  borderRadius: 25,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Decline
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'grey',
                  padding: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginRight: 20,
                  borderRadius: 25,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  See Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SellServiceScreen;
