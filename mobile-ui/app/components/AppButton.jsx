import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppButton({ title, onPress, color = 'primary', textColor='white', width='100%' }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color], width: width}]} onPress={onPress}>
      <Text style={[styles.text, {color: colors[textColor]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    marginVertical: 10
  },
  text: {
    fontSize: 16,
    textTransform: "none",
    fontWeight: "bold",
  },
});