import { StyleSheet, Text, View, Image, StatusBar, Pressable, TouchableOpacity, SafeAreaView, Linking, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { chunk } from '@/utils/lodash'
import NavSearch from '@/components/nav-search'

type Props = {}

import dataJson from '~/data/jd.json'
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props: Props) => {
  const [cartData, setCartData] = useState(chunk(dataJson.data.map((f, index) => {
    return {
      ...f,
      title: f.t,
      quantity: index + 1,
      price: f.jp,
      image: 'https://img12.360buyimg.com/n7/' + f.img,
      id: index + 1
    }
  }), 2));
  const [searchText, setSearchText] = useState('');
  const onItemPress = (target_url: string) => {
    if (target_url) {
      Linking.canOpenURL(target_url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url');
        } else {
          return Linking.openURL(target_url);
        }
      }).catch(err => console.error('An error occurred', err));
    }
  }

  const onSearch = (item: string) => {
    // setSearchText(item);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NavSearch initialValue={searchText} search={(item) => { onSearch(item) }} />

        {
          cartData.map((item, index) => {
            return (
              <View style={styles.items} key={index}>
                <View style={styles.item}>
                  <Image
                    source={{ uri: item[0].image }}
                    style={styles.image}></Image>

                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => onItemPress(item[0].target_url)} >
                      <Text style={styles.title}>{item[0].title}</Text>
                      <Text style={styles.price}>{item[0].price}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.item}>
                  <Image
                    source={{ uri: item[1].image }}
                    style={styles.image}></Image>

                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => onItemPress(item[1].target_url)} >
                      <Text style={styles.title}>{item[1].title}</Text>
                      <Text style={styles.price}>{item[1].price}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    maxHeight: windowHeight - 50,
    overflow: 'scroll',
  },
  items: {
    flexDirection: "row",
    marginBottom: 2,
  },
  item: {
    flex: 1,
    margin: 2,
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  title: {
    margin: 5,
    fontSize: 14,
    lineHeight: 20,
    height: 40,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  price: {
    color: 'red',
    fontSize: 16,
    marginVertical: 4,
  }
})
