import { StyleSheet, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";
import { ErrorMessage } from "./forms";
import { useFormikContext } from "formik";

export default function DatePicker({ bg, icon, name, width = "100%", ...otherProps }) {
  const [show, setShow] = useState(false);
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setFieldValue(name, selectedDate); // Update Formik's state with the selected date
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <View style={[styles.container, { width:width, backgroundColor: bg }]}>
        <TextInput
          style={styles.text}
          value={values[name] ? new Date(values[name]).toLocaleDateString() : ""}
          {...otherProps}
          editable={false}
        />
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={30}
            color={colors.iconColor}
            style={styles.icon}
            onPress={showDatepicker}
          />
        )}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={values[name] ? new Date(values[name]) : new Date()}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 12,
    flexDirection: "row",
    marginVertical: 10,
    padding: 16,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    flex: 1,
  },
});
