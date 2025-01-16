
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar, Linking, Image, FlatList } from 'react-native'

import React, { useState } from 'react'
import NumberStepBox from "@/components/number-step-box";
import { Href, Link } from "expo-router";
type Props = {}
import dataJson from '../../data/jd.json'
type ItemProps = {
  target_url?: string,
  onItemPress?: () => void,
  title: string, price: string, quantity: number, image: string, onQuantityChange: (value: number) => void
};

const imageSize = 80;

// target_url

const Item = (item: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.avatar}>
      <Image
        source={{ uri: item.image }}
        style={{ width: imageSize, height: imageSize }}></Image>
    </View>

    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={item.onItemPress} >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <Text style={styles.price}>{item.price}</Text>
      <NumberStepBox initialValue={item.quantity} onValueChange={item.onQuantityChange} />
    </View>
  </View >
);

const CartScreen = (props: Props) => {
  const [cartData, setCartData] = useState(dataJson.data.map((f, index) => {
    return {
      ...f,
      title: f.t,
      quantity: index + 1,
      price: f.jp,
      image: 'https://img12.360buyimg.com/n7/' + f.img,
      id: index + 1
    }
  }));

  const windowHeight = Dimensions.get('window').height;
  // const screenHeight = Dimensions.get('screen').height;

  const handleQuantityChange = (index: number, value: number) => {
    cartData[index].quantity = value;
    setCartData(cartData)
  };

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
      <View style={{ maxHeight: windowHeight - 50, overflow: 'scroll' }}>
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => <Item image={item.image} quantity={item.quantity} price={item.price} title={item.title}
            onItemPress={() => onItemPress(item.target_url)}
            onQuantityChange={(value) => handleQuantityChange(index, value)}
          />}
        />
      </View>
    </SafeAreaView>
  )
}

export default CartScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  avatar: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginRight: 10,
    overflow: 'hidden',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 10,
    fontSize: 16,
    borderRadius: 10
  },
  title: {
    lineHeight: 20,
    maxHeight: 40,
    overflow: 'hidden'
  },
  price: {
    color: 'red',
    fontSize: 16,
    marginVertical: 4,
  }
})
