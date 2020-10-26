import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function FoodsItem(props) {
  const navigation = useNavigation();
  const DATA = props.item;

  return (
    <Pressable
      onPress={() => navigation.navigate('FoodDetail')}
      android_ripple={{ color: colors.gray, borderless: false }}
      style={styles.container}>
      <Image
        source={{
          uri:
            'https://image.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg',
        }}
        style={styles.item}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.metadata_container}>
          <Title style={styles.title}>{DATA}</Title>
          <View style={styles.rate}>
            <Title style={[styles.rate_title, { fontWeight: 'bold' }]}>$12</Title>
          </View>
        </View>
        <View style={styles.restaurant_metadata}>
          <Icon name="star" color={colors.yellow} size={18} />
          <Title style={styles.rate_title}>4.5</Title>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightyellow
  },
  item: {
    width: 85,
    height: 55,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  metadata_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate_title: {
    marginLeft: 5,
    fontSize: 14,
  },
  restaurant_metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -5,
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.gray,
  },
});
