import Checkbox from "expo-checkbox";
import { useFormikContext } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function CheckBox({ name }) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Checkbox
        value={isChecked}
        onValueChange={(newValue) => {
          setIsChecked(newValue);
          setFieldValue(name, newValue);
        }}
        color={isChecked ? "#4630EB" : undefined}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
