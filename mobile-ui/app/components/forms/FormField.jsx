import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function FormField({ bg, name, width, ...otherProps }) {
  const { errors, handleBlur, handleChange, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        bg={bg}
        onBlur={() => handleBlur(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
