import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import TextHeader from "../components/TextHeader";
import { AppForm, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  passwordConfirmation: Yup.string()
    .label("Confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function ConfirmPasswordResetScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.resetContainer}>
        <AppForm
          initialValues={{ password: "", passwordConfirmation: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Login");
          }}
          validationSchema={validationSchema}
        >
          <TextHeader style={styles.header}>Reset Password</TextHeader>
          <Text style={[styles.header, { color: colors.textGrey }]}>
            Enter New Password
          </Text>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <Text style={[styles.header, { color: colors.textGrey }]}>
            Confirm Password
          </Text>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="SEND" color="blue" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 153, 99, 0.31)",
    justifyContent: "center",
  },
  header: {
    textTransform: "uppercase",
  },
  resetContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
});
