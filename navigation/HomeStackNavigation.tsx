import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlumbingScreen from '../screens/PlumbingScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigation = (): JSX.Element => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="MainHome" component={HomeScreen} />
      <HomeStack.Screen name="Plumbing" component={PlumbingScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
