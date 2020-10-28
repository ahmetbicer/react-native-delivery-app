import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function FoodItem(props) {
  const navigation = useNavigation();
  const DATA = props.item;
  return (
    <Pressable
      onPress={() => navigation.navigate('FoodDetail')}
      android_ripple={{ color: colors.lightgray, borderless: false }} style={styles.item}>
      <View style={styles.image_row}>
        <View style={styles.image_row_title_container}>
          <Title style={styles.image_row_title}>{DATA}</Title>
          <Title numberOfLines={2} style={styles.image_row_subtitle}>Ham, cheese, fresh vegetables, cottage cheese, egg pasta, salad, bread, butter</Title>
        </View>
        <Image source={{ uri: 'https://image.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg' }} style={styles.image_row_image} />
      </View>
      <View style={styles.metadata_container}>
        <View style={styles.metadata_rate_container}>
          <Icon name="star" color={colors.yellow} size={18} />
          <Title style={styles.metadata_rate_title}>4.5 (1,862)</Title>
        </View>
        <View style={styles.metadata_time_container}>
          <Title style={styles.metadata_time_title}>560 cal.</Title>
        </View>
        <View style={styles.metadata_money_container}>
          <Title style={styles.metadata_time_title}>$20</Title>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 165,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "white",
  },
  image_row: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.lightgray
  },
  image_row_image: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  image_row_title_container: {
    flex: 1,
    height: 60,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  image_row_title: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  image_row_subtitle: {
    fontSize: 14,
    lineHeight: 14,
    color: colors.gray,
    overflow: 'hidden'
  },
  metadata_container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  metadata_rate_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  metadata_rate_title: {
    fontSize: 14,
    marginLeft: 5,
    color: colors.gray
  },
  metadata_time_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  metadata_time_title: {
    fontSize: 14,
    marginLeft: 5,
    color: colors.gray
  },
  metadata_money_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
