import React from 'react';
import {Text, View, ImageSourcePropType, Image} from 'react-native';

interface CategoryType {
  id: number;
  name: string;
  description: string;
  imageUrl: ImageSourcePropType;
}
interface CategoryProps {
  item: CategoryType;
}

const Category: React.FC<CategoryProps> = ({item}): JSX.Element => {
  return (
    <View style={{padding: 10, justifyContent: 'center', alignItems: 'center', position:"relative"}}>
      <Image
        source={item.imageUrl}
        style={{
          height: 200,
          width: 150,
          objectFit: 'cover',
          borderRadius: 10,
        }}
      />
      <View style={{backgroundColor: 'grey', padding: 8, position:"absolute", bottom:15, borderRadius:25}}>
        <Text style={{color:"white", fontWeight:"bold"}}>{item.name}</Text>
      </View>
    </View>
  );
};

export default Category;
