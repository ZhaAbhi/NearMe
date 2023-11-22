import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CameraIcon from 'react-native-vector-icons/Entypo';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

interface RequestServiceScreenProps {
  navigation: any;
}

const RequestServiceScreen: React.FC<RequestServiceScreenProps> = ({
  navigation,
}): JSX.Element => {
  const [uploadImage, setUploadImage] = useState(undefined);
  const [buttonPress, setButtonPress] = useState(false);

  console.log(uploadImage);

  const handleUploadImage = (): void => {
    launchImageLibrary({mediaType: 'photo'}, (result: ImagePickerResponse) => {
      if (result.didCancel) {
        return Alert.alert('Please upload the image');
      }
      setUploadImage(result);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 5, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#b88804',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <BackIcon name="keyboard-backspace" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', flex: 1}}
          onPress={handleUploadImage}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {uploadImage ? (
              <Image
                source={{uri: uploadImage.assets[0].uri}}
                style={{height: 100, width: 100}}
              />
            ) : (
              <CameraIcon name="camera" size={50} />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 17}}>Tell us more about your request </Text>
        <View style={{marginTop: 10, height: 80}}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingLeft: 10,
              borderRadius: 10,
              fontSize: 17,
              flex: 1,
            }}
            multiline={true}
            placeholder="Describe here in breif"
          />
        </View>
        <View style={{marginTop: 20, height: 40}}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingLeft: 10,
              borderRadius: 10,
              fontSize: 17,
              flex: 1,
            }}
            multiline={true}
            placeholder="Your budget, example: 500 rupee"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setButtonPress(!buttonPress)}
            activeOpacity={0.8}
            style={[
              {
                marginTop: 20,
                backgroundColor: buttonPress ? 'green' : '#ce8ff2',
                padding: 10,
                paddingLeft: 50,
                paddingRight: 50,
                borderRadius: 20,
              },
            ]}>
            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
              {`${buttonPress ? 'Request Sent' : 'Send Request'}`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestServiceScreen;
