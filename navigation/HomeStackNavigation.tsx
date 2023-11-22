import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlumbingScreen from '../screens/PlumbingScreen';
import GroceryScreen from '../screens/GroceryScreen';
import PharmaceuticalScreen from '../screens/PharmaceuticalScreen';
import ElectricalScreen from '../screens/ElectricalScreen';
import GardeningScreen from '../screens/GardeningScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigation = (): JSX.Element => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="MainHome" component={HomeScreen} />
      <HomeStack.Screen name="Plumbing" component={PlumbingScreen} />
      <HomeStack.Screen name="Groceries" component={GroceryScreen} />
      <HomeStack.Screen
        name="Pharmaceuticals"
        component={PharmaceuticalScreen}
      />
      <HomeStack.Screen name="Electricians" component={ElectricalScreen} />
      <HomeStack.Screen name="Gardening" component={GardeningScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
