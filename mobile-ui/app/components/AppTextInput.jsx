import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({ bg=colors.gray,icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width, backgroundColor: bg }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.iconColor}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 12,
    flexDirection: "row",
    marginVertical: 10,
    padding: 18,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    width: "100%",
  },
});
