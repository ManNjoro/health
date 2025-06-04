import { StyleSheet, Text, View } from "react-native";
import ErrorMessage from './forms/ErrorMessage'
import CheckBox from "./CheckBox";
import { useFormikContext } from "formik";
import colors from "../config/colors";
export default function Terms({description, name, title}) {
    const {errors, touched} = useFormikContext()
  return (
    <>
    <View style={styles.termsContainer}>
      <View style={styles.terms}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <CheckBox name={name} />
    </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  description: {
    color: colors.active,
    fontSize: 14,
  },
  terms: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  }
})
