import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.addButton}>
      <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.primary,
    borderRadius: "50%",
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
