import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ElectricianImage from '../assets/NearMe-Assets/Electricians.jpeg';

const Header = (): JSX.Element => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shop From</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.title}>Your</Text>
          <Text style={[styles.title, {color: '#b88804'}]}> Nearest Store</Text>
        </View>
      </View>
      <View style={{marginRight: 10}}>
        <Image
          source={ElectricianImage}
          style={{height: 40, width: 40, borderRadius: 25}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 25,
  },
});

export default Header;
