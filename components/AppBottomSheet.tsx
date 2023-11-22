import React, {useMemo} from 'react';
import {View, Text, ImageSourcePropType, FlatList} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import AppCard from './AppCard';

interface PlumberType {
  id: number;
  name: string;
  avatar: ImageSourcePropType;
  rating: number;
  distance: string;
}

interface AppBottomSheetPropType {
  plumberData: PlumberType[];
}

const AppBottomSheet: React.FC<AppBottomSheetPropType> = ({
  plumberData,
}): JSX.Element => {
  const snapPoints = useMemo(() => ['10%', '25%', '40%'], []);
  return (
    <BottomSheet snapPoints={snapPoints}>
      <Text style={{fontSize: 17, padding: 5, fontWeight: 'bold'}}>
        Nearby Plumbers
      </Text>
      <View>
        <FlatList
          data={plumberData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <AppCard item={item} />}
        />
      </View>
    </BottomSheet>
  );
};

export default AppBottomSheet;
