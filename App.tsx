import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
