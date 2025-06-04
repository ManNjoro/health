import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import dayjs from "dayjs";
import DevelopmentItem from "../../components/DevelopmentItem";
import AddButton from "../../components/AddButton";

const visits = [
  {
    id: 1,
    description: "2024-03-17",
    icon: "bell-outline",
    title: "Dr. Adams",
  },
  {
    id: 2,
    description: "2024-04-14",
    icon: "bell-outline",
    title: "Dr. Adams",
  },
];

const vaccinationSchedule = [
  {
    id: 1,
    description: "2024-04-25",
    icon: "bell-outline",
    title: "DPT",
  },
  {
    id: 2,
    description: "2024-05-10",
    icon: "bell-outline",
    title: "Hib",
  },
];

export default function NotificationScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.textTitle}>Pediatrician visits</Text>
          {visits.map((item) => (
            <DevelopmentItem
              key={item.id}
              action="Edit"
              description={dayjs(item.description).format("ll")}
              otherstyles={styles.edit}
              name={item.icon}
              title={item.title}
            />
          ))}
        </View>
        <View>
          <Text style={styles.textTitle}>Vaccination Schedule</Text>
          {vaccinationSchedule.map((item) => (
            <DevelopmentItem
              key={item.id}
              action="Edit"
              description={dayjs(item.description).format("ll")}
              name={item.icon}
              otherstyles={styles.edit}
              title={item.title}
            />
          ))}
        </View>
      </ScrollView>
      <AddButton />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    paddingBottom: 60,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  edit: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
