import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
} from 'react-native';

import LoacationPin from 'react-native-vector-icons/Entypo';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBottomSheet from '../components/AppBottomSheet';

interface PlumberType {
  id: number;
  name: string;
  avatar: ImageSourcePropType;
  rating: number;
  distance: string;
}

interface PlumbingScreenProps {
  route: any;
  navigation: any;
}

const Data: PlumberType[] = [
  {
    id: 1,
    name: 'Kamlesh Gupta',
    avatar: require('../assets/NearMe-Plumber-Assets/Kamlesh.jpeg'),
    rating: 4,
    distance: '5 km away',
  },
  {
    id: 2,
    name: 'Sumit Shah',
    avatar: require('../assets/NearMe-Plumber-Assets/sumit.jpeg'),
    rating: 5,
    distance: '2 km away',
  },
  {
    id: 3,
    name: 'Aman Mandal',
    avatar: require('../assets/NearMe-Plumber-Assets/Aman.jpeg'),
    rating: 5,
    distance: '4 km away',
  },
];

const PlumbingScreen: React.FC<PlumbingScreenProps> = ({
  navigation,
  route,
}): JSX.Element => {
  const {description} = route.params;
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backIcon}>
              <BackIcon name="keyboard-backspace" size={25} color="white" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Search For </Text>
              <Text style={styles.title}>Plumbers</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.currentLocationTitle}>
                Your Current Location
              </Text>
              <View style={styles.currentLocationContainer}>
                <LoacationPin
                  name="location-pin"
                  size={25}
                  style={styles.locationpin}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Kathmandu, Nepal"
                  placeholderTextColor="black"
                />
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonContainer}>
              <Text style={styles.button}>Request For Service</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalline}></View>
        </View>
      </SafeAreaView>
      <AppBottomSheet plumberData={Data} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: '53%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 30,
    width: 30,
    backgroundColor: '#b88804',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  inputContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  currentLocationTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '300',
    color: 'black',
    marginLeft: 10,
  },
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationpin: {
    position: 'absolute',
    marginLeft: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    paddingLeft: 30,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ce8ff2',
    marginTop: 20,
    borderRadius: 25,
  },
  button: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  horizontalline: {
    height: 2,
    width: '100%',
    backgroundColor: 'lightgrey',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,

    elevation: 2,
  },
});

export default PlumbingScreen;
