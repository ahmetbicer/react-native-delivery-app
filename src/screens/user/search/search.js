import React, { useState, useEffect } from 'react';
import { Keyboard, LayoutAnimation, Platform, Pressable, StyleSheet, UIManager, View } from 'react-native';
import { Divider, Headline, Searchbar, Text, Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import apiFetch from '../../../hooks/api-fetch';
import RestaurantItem from '../../../components/restaurant/restaurant-item';
import FoodItem from '../../../components/food/food-item';
import { FlatList } from 'react-native-gesture-handler';

export default function SearchScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [showRestaurantSearchResults, setShowRestaurantSearchResults] = useState(false);
  const [restaurantSearchResults, setRestaurantSearchResults] = useState([]);
  const [showFoodSearchResults, setShowFoodSearchResults] = useState(false);
  const [foodSearchResults, setFoodSearchResults] = useState([]);

  function search(value) {
    if (value.length > 0) {
      setSearchText(value)
      setShowAutoComplete(true)
    } else {
      setSearchText("")
      setShowAutoComplete(false)
    }
  }

  async function searchRestaurant() {
    const params = {
      endpoint: `restaurants/search/${searchText}`,
      method: "get",
      auth: true
    }
    let data = await apiFetch(params)

    setRestaurantSearchResults(data);
    setShowRestaurantSearchResults(true);
    setShowFoodSearchResults(false);
    setFoodSearchResults([]);

    setShowAutoComplete(false);
    Keyboard.dismiss();
  }

  async function searchFood() {
    const params = {
      endpoint: `foods/search/${searchText}`,
      method: "get",
      auth: true
    }
    let data = await apiFetch(params)

    setFoodSearchResults(data);
    setShowFoodSearchResults(true);
    setShowRestaurantSearchResults(false);
    setRestaurantSearchResults([]);

    setShowAutoComplete(false);
    Keyboard.dismiss();
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <Title style={styles.title}>Search</Title>
        <Headline style={styles.subtitle}>For Best Foods</Headline>
        <Searchbar
          style={{ marginTop: 20 }}
          placeholder="Search"
          value={searchText}
          onChangeText={search}
          theme={{ colors: { primary: colors.gray } }}
        />
        {showAutoComplete &&
          <View style={styles.autocomplete_container}>
            <Pressable onPress={searchRestaurant} style={styles.autocomplete_item} android_ripple={{ color: colors.lightgray, borderless: false }}>
              <Icon name="store" color={colors.gray} size={24} />
              <Text numberOfLines={1} style={styles.autocomplete_text}>Restaurants with <Title style={styles.autocomplete_text}>"{searchText}"</Title></Text>
            </Pressable>
            <Divider />
            <Pressable onPress={searchFood} style={styles.autocomplete_item} android_ripple={{ color: colors.lightgray, borderless: false }}>
              <Icon name="hamburger" color={colors.gray} size={24} />
              <Text numberOfLines={1} style={styles.autocomplete_text}>Foods with <Title style={styles.autocomplete_text}>"{searchText}"</Title></Text>
            </Pressable>
          </View>
        }
      </View>
      <View style={styles.list_container}>
        {showRestaurantSearchResults &&
          <FlatList
            data={restaurantSearchResults}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            keyExtractor={item => item.id.toString()}
            renderItem={item => (
              <RestaurantItem data={item} />
            )}
          />
        }
        {showFoodSearchResults &&
          <FlatList
            data={foodSearchResults}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            keyExtractor={item => item.id.toString()}
            renderItem={item => (
              <FoodItem data={item} />
            )}
          />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
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
  autocomplete_container: {
    marginTop: 1,
    backgroundColor: "white",
    elevation: 4,
    zIndex: 999
  },
  autocomplete_item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: "center"
  },
  autocomplete_text: {
    fontSize: 17,
    fontWeight: "100",
    maxWidth: "90%",
    overflow: 'hidden',
    marginLeft: 5,
  },
  list_container: {
    flex: 3,
    marginTop: 15,
    backgroundColor: colors.lightgray,
    borderTopColor: colors.yellow,
    borderTopWidth: 2
  },
  list: {
    paddingTop: 15,
    paddingHorizontal: 20
  }
})