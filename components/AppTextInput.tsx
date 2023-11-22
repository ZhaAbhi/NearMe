import React from 'react';
import {View, TextInput} from 'react-native';

interface AppTextInputPropType {
  placeholder: string;
}

const AppTextInput: React.FC<AppTextInputPropType> = ({
  placeholder,
}): JSX.Element => {
  return (
    <View style={{marginVertical: 15}}>
      <TextInput
        placeholder={placeholder}
        style={{
          paddingLeft: 10,
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 25,
        }}
      />
    </View>
  );
};

export default AppTextInput;
