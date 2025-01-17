import { StyleSheet, Text, View, StatusBar, FlatList, Image, TouchableOpacity, SafeAreaView, Linking, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { chunk } from '@/utils/lodash'
type Props = {}

const image = require('~/assets/images/model.jpg')
import dataJson from '~/data/jd.json'

type SubItemProps = {
  target_url?: string,
  onItemPress?: () => void,
  title: string, price: string, quantity: number, image: string
};

const imageSize = 60;

const HomeScreen = (props: Props) => {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const windowHeight = Dimensions.get('window').height;

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

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="blue" />
      <View style={{ ...styles.container, maxHeight: windowHeight - 50, overflowY: 'scroll', overflowX: 'hidden' }}>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  items: {
    flexDirection: "row",
    marginBottom: 5,
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
    margin: 'auto'
  },
  price: {
    color: 'red',
    fontSize: 16,
    marginVertical: 4,
  }
})
