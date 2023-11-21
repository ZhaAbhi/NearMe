import React from 'react';
import {
  Text,
  View,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';

interface CategoryType {
  id: number;
  name: string;
  description: string;
  imageUrl: ImageSourcePropType;
  color: string;
}
interface CategoryProps {
  item: CategoryType;
}

const Category: React.FC<CategoryProps> = ({item}): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <Image
        source={item.imageUrl}
        style={{
          height: 200,
          width: 150,
          objectFit: 'cover',
          borderRadius: 10,
        }}
      />
      <View
        style={{
          backgroundColor: item.color,
          padding: 8,
          position: 'absolute',
          bottom: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
