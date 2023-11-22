import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SellServiceScreen from '../screens/SellServiceScreen';
import ServiceStatusScreen from '../screens/ServiceStatusScreen';
import HomeIcon from 'react-native-vector-icons/Entypo';
import SellerIcon from 'react-native-vector-icons/Foundation';
import StatusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackNavigation from './HomeStackNavigation';

const MyTab = createBottomTabNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    <MyTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#b88804',
      }}>
      <MyTab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({size, color}) => (
            <HomeIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <MyTab.Screen
        name="Seller"
        component={SellServiceScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <SellerIcon name="torso-business" size={size} color={color} />
          ),
        }}
      />
      <MyTab.Screen
        name="Status"
        component={ServiceStatusScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <StatusIcon name="update" size={size} color={color} />
          ),
        }}
      />
    </MyTab.Navigator>
  );
};

export default MainNavigation;
