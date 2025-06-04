import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { AppForm, FormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  licenseNumber: Yup.string().required().label("License number"),
  specialization: Yup.string().required().label("Specialization"),
});

export default function ProfileSetupScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.textTitle}>Medical Registration</Text>
      <Text style={styles.instructions}>
        Enter your medical registration details
      </Text>
      <View style={styles.body}>
        <AppForm
          initialValues={{ licenseNumber: "", specialization: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("ConsultationSetup");
          }}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="licenseNumber"
            placeholder="Enter your license number"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="specialization"
            placeholder="Enter your specialization"
          />
          <SubmitButton title="Next" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 10,
  },
  container: {
    margin: 10,
  },
  instructions: {
    fontSize: 16,
    fontWeight: "regular",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
