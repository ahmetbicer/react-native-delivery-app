import * as React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

export default function RestaurantItem(props) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('RestaurantDetail')}
      android_ripple={{color: colors.gray, borderless: false}}
      style={[styles.item, {marginHorizontal: 15}]}>
      <ImageBackground
        source={{
          uri: props.image,
        }}
        style={styles.item}
        imageStyle={{borderRadius: 10}}>
        <View style={styles.time_metadata}>
          <Paragraph
            style={[styles.title, {color: colors.gray, fontWeight: '900'}]}>
            Delivery Time
          </Paragraph>
          <Paragraph
            style={[
              styles.title,
              {color: colors.black, fontWeight: 'bold', marginTop: 3},
            ]}>
            20 mins
          </Paragraph>
        </View>
      </ImageBackground>
      <View style={{marginBottom: -7}}>
        <Title style={{lineHeight: 19, fontSize: 19, fontWeight: 'bold'}}>
          Seafood Pesto
        </Title>
        <Paragraph style={{fontSize: 14}}>
          5678 Extra Rd. #123 San Francisco, CA 96120.
        </Paragraph>
        <View style={styles.metadata}>
          <View style={styles.rate}>
            <Icon name="star" color={colors.yellow} size={16} />
            <Icon name="star" color={colors.yellow} size={16} />
            <Icon name="star" color={colors.yellow} size={16} />
            <Icon name="star" color={colors.yellow} size={16} />
            <Icon name="star" color={colors.gray} size={16} />
            <Title style={styles.rate_title}>4.5</Title>
          </View>
          <View style={[styles.rate, {marginLeft: 15}]}>
            <Icon name="silverware-variant" color={colors.black} size={18} />
            <Title style={styles.rm_title}>French, Chinese, Mexican</Title>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 225,
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
    fontWeight: 'bold',
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.black,
  },
});
