import * as React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Divider, Headline, Searchbar, Text, Title } from 'react-native-paper';
import AppBar from '../../components/app-bar';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchScreen(props) {
  const [searchText, setSearchText] = useState("")
  const [showAutoComplete, setShowAutoComplete] = useState(false)

  function search(value) {
    if (value.length > 0) {
      setSearchText(value)
      setShowAutoComplete(true)
    } else {
      setSearchText("")
      setShowAutoComplete(false)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <AppBar screenName={props.route.name} />
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
            <Pressable onPress={() => { }} style={styles.autocomplete_item} android_ripple={{ color: colors.lightgray, borderless: false }}>
              <Icon name="store" color={colors.gray} size={24} />
              <Text numberOfLines={1} style={styles.autocomplete_text}>Restaurants with <Title style={styles.autocomplete_text}>"{searchText}"</Title></Text>
            </Pressable>
            <Divider />
            <Pressable onPress={() => { }} style={styles.autocomplete_item} android_ripple={{ color: colors.lightgray, borderless: false }}>
              <Icon name="hamburger" color={colors.gray} size={24} />
              <Text numberOfLines={1} style={styles.autocomplete_text}>Foods with <Title style={styles.autocomplete_text}>"{searchText}"</Title></Text>
            </Pressable>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    overflow: 'hidden',
    marginLeft: 5,
  }
})