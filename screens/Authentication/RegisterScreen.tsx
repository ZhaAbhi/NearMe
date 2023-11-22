import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AppTextInput from '../../components/AppTextInput';

const RegisterScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Password" />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
