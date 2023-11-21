import React from 'react';
import {
  Text,
  View,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  StyleSheet,
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
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={[styles.textContainer, {backgroundColor: item.color}]}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    height: 200,
    width: 150,
    objectFit: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    padding: 8,
    position: 'absolute',
    bottom: 15,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Category;
