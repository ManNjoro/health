import { ScrollView, StyleSheet, Text, View } from "react-native";
import DevelopmentItem from "../../components/DevelopmentItem";
import Screen from "../../components/Screen";

export default function HealthDevelopment() {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>Upcoming Milestones</Text>
        <DevelopmentItem action="Set Reminder" title="2 months" />
        <DevelopmentItem action="Set Reminder" title="4 months" />
        <Text style={styles.textTitle}>Vaccinations</Text>
        <DevelopmentItem action="Set Reminder" title="HepB. 1st dose" />
        <DevelopmentItem action="Set Reminder" title="Rv. 1st dose" />
        <Text style={styles.textTitle}>Motor skills</Text>
        <DevelopmentItem action="Set Reminder" title="Tummy Time" />
        <DevelopmentItem action="Set Reminder" title="Lifts Head" />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
