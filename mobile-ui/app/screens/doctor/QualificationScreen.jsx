import { ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import TextHeader from "../../components/TextHeader";
import { AppForm, FormField, SubmitButton } from "../../components/forms";
import DatePicker from "../../components/DatePicker";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
  certExpDate: Yup.date(),
  certificationNumber: Yup.string(),
  issueState: Yup.string().required().label("State of issue"),
  licenseExpDate: Yup.date().required().label("License expiration date"),
  licenseNumber: Yup.string().required().label("License number"),
  school: Yup.string().required().label("School of Medicine"),
});

export default function QualificationScreen({navigation}) {
  return (
    <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

      <TextHeader>Add your education</TextHeader>
      <Text style={styles.description}>
        Your education will be verified by our team to ensure you are a licensed
        and certified professional.
      </Text>
      <AppForm
        initialValues={{
          issueState: "",
          licenseExpDate: "",
          licenseNumber: "",
          school: "",
        }}
        onSubmit={(values) => {
          console.log(values)
          navigation.navigate("Terms&Conditions")
        }}
        validationSchema={validationSchema}
        >
        <FormField
          bg="transparent"
          name="school"
          placeholder="School of Medicine"
          placeholderTextColor={colors.active}
          />
        <TextHeader>Medical License</TextHeader>
        <FormField
          bg="transparent"
          name="licenseNumber"
          placeholder="License Number"
          placeholderTextColor={colors.active}
          />
        <FormField
          bg="transparent"
          name="issueState"
          placeholder="State of issue"
          placeholderTextColor={colors.active}
        />
        <DatePicker
          name="licenseExpDate"
          icon="calendar"
          placeholder="Expiration date"
          placeholderTextColor={colors.active}
          />
        <TextHeader>Board Certification (optional)</TextHeader>
        <FormField
          bg="transparent"
          name="certificationNumber"
          placeholder="Certification Number"
          placeholderTextColor={colors.active}
          />
        <DatePicker
          name="certExpDate"
          icon="calendar"
          placeholder="Expiration date"
          placeholderTextColor={colors.active}
          />
        <SubmitButton title="Save and continue" />
      </AppForm>
          </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingVertical: 10
    },
    description: {
        color: colors.active
    }
});
