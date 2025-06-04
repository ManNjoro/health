import { FlatList, StyleSheet, TextInput, View } from "react-native";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import ConsultationType from "./ConsultationType";
import { AppForm, SubmitButton } from "../../components/forms";
import { useFormikContext } from "formik";
import AppFormPicker from "../../components/AppFormPicker";
import TextHeader from "../../components/TextHeader";

const consultationTypes = [
  {
    label: "Video call",
    value: "videocall",
  },
  {
    label: "Phone call",
    value: "phonecall",
  },
  {
    label: "In person",
    value: "inperson",
  },
];

const validationSchema = Yup.object().shape({
  consultationType: Yup.string().required().label("Consultation type"),
});

export default function ConsultationSetupScreen({ navigation, numberOfColumns = 2 }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{ consultationType: "" }}
          onSubmit={(values) => {
            console.log(values)
            navigation.navigate("Billing")
          }}
          validationSchema={validationSchema}
        >
          <TextHeader>Preferred Consultation Type</TextHeader>
          <AppFormPicker
            items={consultationTypes}
            name="consultationType"
            placeholder="Select consultation type"
          />
          <SubmitButton title="Next" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    gap: 10,
    marginBottom: 10,
  },
  container: {
    margin: 15,
  },
});
