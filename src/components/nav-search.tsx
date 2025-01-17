import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

type NavSearchProps = {
  initialValue: string;
  search: (value: string) => void;
}

const NavSearch = ({ initialValue, search }: NavSearchProps) => {
  const [value, setValue] = useState(initialValue);

  const onSearch = () => {
    search(value);
  }
  return (
    <View style={styles.navSearch}>
      <View style={{ flex: 1 }}>
        <View style={styles.textWrap}>
          <TextInput style={styles.text} value={value} onChangeText={setValue}
          />
        </View>
      </View>
      <Pressable onPress={onSearch}>
        <Ionicons name="search-outline" size={24} />
      </Pressable>
    </View>
  );
};

export default NavSearch;

const btnSize = 26;
const styles = StyleSheet.create({
  navSearch: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  textWrap: {
    justifyContent: 'center',
    borderRadius: btnSize / 2,
    borderColor: '#ccc',
    marginRight: 10,
    borderWidth: 1,
  },
  text: {
    lineHeight: btnSize,
    marginHorizontal: 10,
  }
})
