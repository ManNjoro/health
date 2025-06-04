import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import TextHeader from "../components/TextHeader";
import { AppForm, FormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  otp: Yup.string().required().label("OTP"),
});

export default function OtpScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <View style={styles.resetContainer}>
        <AppForm
          initialValues={{ otp: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Reset Password")
          }}
          validationSchema={validationSchema}
        >
          <TextHeader style={styles.header}>Reset Password</TextHeader>
          <Text style={[styles.header, { color: colors.textGrey }]}>
            Enter OTP
          </Text>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="security"
            name="otp"
            placeholder="OTP"
            keyboardType="number-pad"
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
