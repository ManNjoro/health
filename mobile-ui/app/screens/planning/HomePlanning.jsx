import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import DatePicker from "../../components/DatePicker";
import { AppForm, SubmitButton } from "../../components/forms";
import TextHeader from "../../components/TextHeader";
import CheckBox from "../../components/CheckBox";
import colors from "../../config/colors";

const symptoms = [
  "Headache",
  "Cramps",
  "Stress",
  "Backpain",
  "Mood Swings",
  "Fatigue",
];

export default function HomePlanning() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ periodDate: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <DatePicker placeholder='Period Tracking calendar' name="periodDate" icon="calendar" bg={colors.gray} />
        <TextHeader>Log your symptoms</TextHeader>
        {symptoms.map((symptom) => (
          <View key={symptom} style={styles.termsContainer}>
            <Text style={styles.symptom}>{symptom}</Text>
            <CheckBox name={symptom.toLowerCase()} />
          </View>
        ))}
        <SubmitButton title={"Submit"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  symptom: {
    flexGrow: 1,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
