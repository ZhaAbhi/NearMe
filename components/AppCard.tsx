import React from 'react';
import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import StarIcon from 'react-native-vector-icons/Entypo';

interface PlumberType {
  id: number;
  name: string;
  avatar: ImageSourcePropType;
  rating: number;
  distance: string;
}

interface AppCardPropType {
  item: PlumberType;
}

const AppCard: React.FC<AppCardPropType> = ({item}): JSX.Element => {
  const renderStars = (rating: number): JSX.Element[] => {
    const stars = [];
    const totalStars: number = 5;
    for (let i = 0; i < totalStars; i++) {
      const starColor = i < rating ? 'orange' : 'grey';
      stars.push(<StarIcon key={i} name="star" size={18} color={starColor} />);
    }
    return stars;
  };
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 10,
        padding: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={item.avatar}
          style={{height: 50, width: 50, borderRadius: 25, objectFit: 'cover'}}
        />
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 16, color: 'grey'}}>{item.distance}</Text>
        </View>
        <View style={{marginLeft: 'auto', padding: 5}}>
          <View style={{flexDirection: 'row'}}>{renderStars(item.rating)}</View>
        </View>
      </View>
      <View
        style={{height: 0.5, backgroundColor: 'grey', marginTop: '2%'}}></View>
    </View>
  );
};

export default AppCard;
