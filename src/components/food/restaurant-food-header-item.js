import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AppBar from '../common/app-bar';

export default function RestaurantFoodHeaderItem(props) {
  const item = props.item;
  const [favorite, setFavorite] = useState(false)
  const route = useRoute();

  return (
    <ImageBackground source={{ uri: item.image }} style={styles.item}>
      <View style={styles.container}>
        <AppBar favorite={favorite} setFavorite={setFavorite} screenName={route.name} title={item.name} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});
