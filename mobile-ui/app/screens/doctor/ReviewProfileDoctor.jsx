import { ScrollView, StyleSheet, View } from "react-native";
import Screen from "../../components/Screen";
import TextHeader from "../../components/TextHeader";
import { NotificationItem } from "../planning/NotificationPlanning";
import { AppForm, SubmitButton } from "../../components/forms";

export default function ReviewProfileDoctor() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{ name: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <View style={styles.details}>
            <TextHeader>Personal details</TextHeader>
            <NotificationItem icon="pencil-outline" notification="Female" />
            <NotificationItem
              icon="pencil-outline"
              notification="Dr.Michoma Md"
            />
            <NotificationItem icon="pencil-outline" notification="Nairobi" />
            <TextHeader>Specialty</TextHeader>
            <NotificationItem
              icon="pencil-outline"
              notification="Opththalmology"
            />
            <TextHeader>License and certifications</TextHeader>
            <NotificationItem
              icon="pencil-outline"
              notification="California State Medical License"
            />
          </View>
          <SubmitButton title="Submit profile" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  details: {
    marginBottom: 20,
  },
});
