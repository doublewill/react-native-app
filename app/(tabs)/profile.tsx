import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

type Props = {}

const ProfileScreen = (props: Props) => {
  const onPress = () => {
    router.push('/login');
  }
  return (
    <View style={styles.container}>
      <Button title='登录' onPress={onPress}></Button>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
