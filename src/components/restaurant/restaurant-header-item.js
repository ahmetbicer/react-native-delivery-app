import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';
import { useRoute } from '@react-navigation/native';
import AppBar from '../common/app-bar';

export default function RestaurantHeaderItem(props) {
  const item = props.item;
  const [favorite, setFavorite] = useState(false)
  const route = useRoute();

  return (
    <ImageBackground
      source={{
        uri: item.image,
      }}
      blurRadius={3}
      style={styles.item}>
      <View>
        <AppBar favorite={favorite} setFavorite={setFavorite} screenName={route.name} />
        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          <Paragraph numberOfLines={1} style={{ fontSize: 14, color: "lightgray", maxWidth: '75%', overflow: 'hidden' }}>
            {item.address}
          </Paragraph>
          <Title style={{ marginTop: 5, fontSize: 24, fontWeight: 'bold', color: colors.white }}>
            {item.name}
          </Title>
          <View style={styles.metadata}>
            <View style={styles.rate}>
              <Icon name="star" color={colors.yellow} size={18} />
              <Title style={styles.rate_title}>{item.star} Star</Title>
            </View>
            <View style={[styles.rate, { marginLeft: 15 }]}>
              <Icon name="clock" color={colors.gray} size={18} />
              <Title style={styles.rm_title}>{item.delivery_time} mins</Title>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  time_metadata: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 15,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  metadata: {
    flexDirection: 'row',
  },
  title: {
    lineHeight: 13,
    fontSize: 14,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.white
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.white
  },
});
