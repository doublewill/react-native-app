import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
type Props = {};
const WelcomeScreen = (props: Props) => {
  return (
    < View style={styles.container} >
      <TouchableOpacity onPress={() => {
        router.dismissAll();
        router.push('/(tabs)');
      }}>
        <Text>Go to App Home Screen</Text>
      </TouchableOpacity>

      {/*
      <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text>Go to SignIn Screen</Text>
        </TouchableOpacity>
      </Link> */}
      <Link href={"/signup"} asChild>
        <TouchableOpacity>
          <Text>Go to SignUp Screen</Text>
        </TouchableOpacity>
      </Link>
    </View >
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
