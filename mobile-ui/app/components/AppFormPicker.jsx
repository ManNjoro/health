import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppPicker from "./AppPicker";
import { ErrorMessage } from "./forms";

export default function AppFormPicker({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}