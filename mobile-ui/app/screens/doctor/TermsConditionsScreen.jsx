import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import Checkbox from "expo-checkbox";
import colors from "../../config/colors";
import { useState } from "react";
import CheckBox from "../../components/CheckBox";
import { AppForm, SubmitButton } from "../../components/forms";
import Terms from "../../components/Terms";
import TextHeader from "../../components/TextHeader";

const validationSchema = Yup.object().shape({
  privacy: Yup.bool().oneOf(
    [true],
    "You need to accept our Privacy policy to continue"
  ),
  terms: Yup.bool().oneOf([true], "You need to accept our Terms to continue"),
});
export default function TermsConditionsScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ terms: false, privacy: false }}
        onSubmit={(values) => {
          console.log(values)
          navigation.navigate("DashboardDoc")
        }}
        validationSchema={validationSchema}
      >
        <TextHeader>Terms and Conditions</TextHeader>
        <Text style={styles.instructions}>
          Please review and agree to our terms and conditions before proceeding.
        </Text>
        <Terms
          description="Effective as of December 23, 2023"
          name="privacy"
          title="1. Privacy Policy"
        />
        <Terms
          description="Effective as of December 23, 2023"
          name="terms"
          title="2. Terms of Service"
        />
        <SubmitButton title="Agree and Continue" />
      </AppForm>
    </Screen>
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
  instructions: {
    fontSize: 16
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
  },
});
