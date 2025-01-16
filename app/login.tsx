import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

type Props = {}

const SignInScreen = (props: Props) => {

  const onLogin = () => {
    router.dismissAll();
    router.push('/(tabs)');
  }
  return (
    <View style={styles.container}>

      <View style={styles.loginForm}>
        <View style={styles.loginFormItem}>
          <Text style={styles.formLabel}>用户名</Text>
          <TextInput style={styles.formInput} placeholder='请输入用户名' />
        </View>
        <View style={styles.loginFormItem}>
          <Text style={styles.formLabel}>密码</Text>
          <TextInput style={styles.formInput} placeholder='请输入密码' />
        </View>

        <View style={styles.loginSubmit}>
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.loginBtnText}>登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3c8c7c',
    alignItems: 'center'
  },
  loginForm: {
    backgroundColor: 'white',
    width: '70%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginFormItem: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    lineHeight: 30
  },
  formLabel: {
    width: 70,
    lineHeight: 30,
    textAlign: 'right',
    marginRight: 10
  },
  formInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
  },
  loginSubmit: {
    width: '100%',
    backgroundColor: '#333',
    textAlign: 'right'
  },
  loginBtn: {
    textAlign: 'right',
  },
  loginBtnText: {
    color: 'white',
    backgroundColor: '#3c8c7c',
    textAlign: 'center',
    lineHeight: 30
  }
})
