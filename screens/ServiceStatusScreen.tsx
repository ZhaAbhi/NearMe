import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import ElectricalImage from '../assets/NearMe-Assets/Electricians.jpeg';

const ServiceStatusScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: 'black', letterSpacing: 0.3}}>
          Recent Requested Order
        </Text>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ElectricalImage}
              style={{height: 70, width: 70, borderRadius: 10}}
            />
            <View style={{marginLeft: 5, flex: 1}}>
              <Text style={{marginBottom: 5, fontSize: 15}}>
                Description: I want to repair my bathroom
              </Text>
              <Text style={{marginBottom: 5, fontSize: 15}}>
                Bid: 500 rupees
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginBottom: 5, fontSize: 15}}>Status: </Text>
                <Text style={{marginBottom: 5, fontSize: 15, color: 'orange'}}>
                  Pending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ServiceStatusScreen;
