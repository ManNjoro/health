import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function Action({onPress,style, title}) {
  return (
    <TouchableOpacity style={[styles.container, {...style}]} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    borderRadius: 18,
    padding: 10,
    height: 45,
  },
});
