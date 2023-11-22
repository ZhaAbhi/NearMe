import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SellServiceScreen from '../screens/SellServiceScreen';
import ServiceStatusScreen from '../screens/ServiceStatusScreen';
import HomeIcon from 'react-native-vector-icons/Entypo';

const MyTab = createBottomTabNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    <MyTab.Navigator screenOptions={{headerShown: false}}>
      <MyTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIcon name="home" size={25} />,
        }}
      />
      <MyTab.Screen name="Seller" component={SellServiceScreen} />
      <MyTab.Screen name="Status" component={ServiceStatusScreen} />
    </MyTab.Navigator>
  );
};

export default MainNavigation;
