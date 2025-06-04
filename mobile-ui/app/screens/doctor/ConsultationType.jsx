import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function ConsultationType({ bgColor,icon, onPress, type }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <MaterialCommunityIcons name={icon} size={20} />
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  type: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});
