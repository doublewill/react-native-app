import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

type NumberStepProps = {
  initialValue: number;
  onValueChange: (value: number) => void;
}

const NumberStepBox = ({ initialValue, onValueChange }: NumberStepProps) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue(value + 1);
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
      onValueChange(value - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={styles.btn}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{value}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <Text style={styles.btn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberStepBox;

const btnSize = 26;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  btn: {
    width: btnSize,
    height: btnSize,
    lineHeight: btnSize - 4,
    textAlign: 'center',
    backgroundColor: '#eee',
  },
  text: {
    width: 50,
    height: btnSize,
    lineHeight: btnSize,
    textAlign: 'center',
    borderColor: '#ccc',
    marginHorizontal: 2,
    borderWidth: 1
  }
})
