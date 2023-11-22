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
    <View style={styles.main}>
      <View style={styles.secondary}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.discriptionContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.distance}>{item.distance}</Text>
        </View>
        <View style={styles.ratingBox}>
          <View style={styles.rating}>{renderStars(item.rating)}</View>
        </View>
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: 10,
    padding: 5,
  },
  secondary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    objectFit: 'cover',
  },
  discriptionContainer: {
    marginLeft: 5,
  },
  name: {
    color: 'black',
    fontSize: 16,
  },
  distance: {
    fontSize: 16,
    color: 'grey',
  },
  ratingBox: {
    marginLeft: 'auto',
    padding: 5,
  },
  rating: {
    flexDirection: 'row',
  },
  seperator: {
    height: 0.5,
    backgroundColor: 'grey',
    marginTop: '2%',
  },
});

export default AppCard;
