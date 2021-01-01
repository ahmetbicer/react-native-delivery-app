import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Title } from 'react-native-paper';
import RestaurantFoods from '../../../components/food/restaurant-foods';
import colors from '../../../constants/colors';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AddFoodBottomSheet from '../../../components/food/restaurant-add-food-bottom-sheet';

export default function FoodScreen(props) {

  const addFoodBottomSheetRef = useRef(null);

  function openBottomSheet() {
    addFoodBottomSheetRef.current?.present();
  }

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={styles.container}>
          <Title style={styles.title}>
            Restaurant
              <Headline style={styles.subtitle}> Foods</Headline>
          </Title>
          <RestaurantFoods openBottomSheet={openBottomSheet} />
        </View>
        <AddFoodBottomSheet ref={addFoodBottomSheetRef} />
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
});
