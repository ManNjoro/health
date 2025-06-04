import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, FormField, SubmitButton } from "../../components/forms";
import DatePicker from "../../components/DatePicker";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TextHeader from "../../components/TextHeader";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required().label("First Name"),
  lname: Yup.string().required().label("Last Name"),
  ssn: Yup.string().required().label("SSN"),
  dob: Yup.date().required().label("Date of Birth"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
});

export default function BillingDetailsScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            fname: "",
            lname: "",
            ssn: "",
            dob: "",
            address: "",
            city: "",
          }}
          onSubmit={(values) => {
            console.log(values)
            navigation.navigate("ProfilePic")
          }}
          validationSchema={validationSchema}
        >
          <TextHeader style={{textAlign: 'center'}}>Add Billing Details</TextHeader>
          <FormField name="fname" placeholder="First Name" />
          <FormField name="lname" placeholder="Last Name" />
          <FormField name="ssn" placeholder="SSN" />
          <DatePicker bg={colors.gray} icon="calendar" name="dob" placeholder="Date of Birth" />
          <FormField name="address" placeholder="Address" />
          <FormField name="city" placeholder="City" />
          <SubmitButton title="Next" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
