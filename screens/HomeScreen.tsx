import React from 'react';
import {View, ImageSourcePropType, ScrollView, StyleSheet} from 'react-native';
import Category from '../components/Category';
import Header from '../components/Header';

interface CategoryType {
  id: number;
  name: string;
  description: string;
  imageUrl: ImageSourcePropType;
  color: string;
}

const Data: CategoryType[] = [
  {
    id: 1,
    name: 'Groceries',
    description: 'All the Groceries Items',
    imageUrl: require('../assets/NearMe-Assets/Grocery.jpeg'),
    color: '#eda09a',
  },
  {
    id: 2,
    name: 'Pharmaceuticals',
    description: 'All the Medicines',
    imageUrl: require('../assets/NearMe-Assets/Pharmaceuticals.jpeg'),
    color: '#8fb3f2',
  },
  {
    id: 3,
    name: 'Plumbing',
    description: 'Get your plumbing service done quickly',
    imageUrl: require('../assets/NearMe-Assets/Plumbing.jpeg'),
    color: '#ce8ff2',
  },
  {
    id: 4,
    name: 'Mechanics',
    description: 'Repair your vechicles',
    imageUrl: require('../assets/NearMe-Assets/Mechanics.jpeg'),
    color: '#f28fc9',
  },
  {
    id: 5,
    name: 'Electricians',
    description: 'All the Electric services',
    imageUrl: require('../assets/NearMe-Assets/Electricians.jpeg'),
    color: '#4ca10b',
  },
  {
    id: 6,
    name: 'Gardening',
    description: 'For your gardening service',
    imageUrl: require('../assets/NearMe-Assets/Gardening.jpeg'),
    color: '#a19e0b',
  },
];

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}): JSX.Element => {
  const NavigateToCategoryName = (name: string, description?: string) => {
    navigation.navigate(name, {description});
  };
  return (
    <>
      <Header />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {Data.map(data => (
            <Category
              item={data}
              key={data.id}
              onPress={() =>
                NavigateToCategoryName(data.name, data.description)
              }
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default HomeScreen;
