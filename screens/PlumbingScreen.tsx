import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

interface PlumbingScreenProps {
  route: any;
  navigation: any;
}

const PlumbingScreen: React.FC<PlumbingScreenProps> = ({
  navigation,
  route,
}): JSX.Element => {
  const {description} = route.params;
  return (
    <SafeAreaView>
      <Text>This is the plumbing screen</Text>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PlumbingScreen;
