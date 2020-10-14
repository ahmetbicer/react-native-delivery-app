import * as React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Headline, Subheading, Title} from 'react-native-paper';
import AppBar from '../../components/app-bar';
import FoodCategories from '../../components/food-categories';
import PopularFoods from '../../components/popular-foods';
import PopularRestaurants from '../../components/popular-restaurants';
import colors from '../../constants/colors';

export default function HomeScreen(props) {
  const [showPageTitle, setShowPageTitle] = useState(false);

  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 90) {
      setShowPageTitle(true);
    } else {
      setShowPageTitle(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <AppBar showPageTitle={showPageTitle} screenName={props.route.name} />
      <ScrollView style={styles.container} onScroll={handleScroll}>
        <Title style={styles.title}>Let's Find</Title>
        <Headline style={styles.subtitle}>Something to Eat.</Headline>
        <FoodCategories />
        <View style={styles.popularRestaurants}>
          <Title style={styles.pr_title}>Popular Restaurants</Title>
          <Headline style={styles.pr_subtitle}>See All</Headline>
        </View>
        <PopularRestaurants />
        <View style={styles.popularFoods}>
          <Title style={styles.pf_title}>Popular Foods</Title>
          <Headline style={styles.pf_subtitle}>See All</Headline>
        </View>
        <PopularFoods />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  popularRestaurants: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pr_title: {
    fontSize: 21,
    color: colors.black,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  pr_subtitle: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  popularFoods: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pf_title: {
    fontSize: 21,
    color: colors.black,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  pf_subtitle: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
});
