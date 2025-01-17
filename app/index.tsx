import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
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
