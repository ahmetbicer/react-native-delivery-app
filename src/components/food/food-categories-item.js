import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

const FoodCategoriesItem = React.memo((props) => {
  const iconNames = [
    { name: 'food-drumstick-outline', title: 'Chicken' },
    { name: 'food-steak', title: 'Steak' },
    { name: 'food-apple-outline', title: 'Fruits' },
    { name: 'coffee-outline', title: 'Coffee' },
  ];

  const index = props.index;
  return (
    <View style={styles.item}>
      <Icon name={iconNames[index].name} color={colors.black} size={42} />
      <View
        style={[
          styles.circle,
          {
            top: getRndInteger(0, 25),
            left: getRndInteger(0, 25),
          },
        ]}></View>
      <Title style={styles.title}>{iconNames[index].title}</Title>
    </View>
  );
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  circle: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 99,
    zIndex: -1,
    backgroundColor: '#ffcf00',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default FoodCategoriesItem;
