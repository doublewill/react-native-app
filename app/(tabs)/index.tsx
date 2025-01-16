import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>HomeScreen Screen1211</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
