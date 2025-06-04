import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import TextHeader from "../components/TextHeader";
import { AppForm, FormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export default function PasswordResetScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <View style={styles.resetContainer}>
        <AppForm
          initialValues={{ email: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("OTP")
          }}
          validationSchema={validationSchema}
        >
          <TextHeader style={styles.header}>Reset Password</TextHeader>
          <Text style={[styles.header, { color: colors.textGrey }]}>
            Enter Email
          </Text>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
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
