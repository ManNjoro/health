import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
  View,
} from "react-native";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import DevelopmentItem from "../../components/DevelopmentItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import colors from "../../config/colors";
import AddButton from "../../components/AddButton";

dayjs.extend(localizedFormat);

const appointments = [
  {
    id: 1,
    date: "2024-06-28 09:30",
    description: "Dr. Ashley",
    icon: "calendar-month",
    title: "Prenatal visit",
  },
  {
    id: 2,
    date: "2024-07-26 09:30",
    description: "Dr. Ashley",
    icon: "calendar-month",
    title: "Prenatal visit",
  },
  {
    id: 3,
    date: "2024-08-23 09:30",
    description: "Dr. Ashley",
    icon: "calendar-month",
    title: "Prenatal visit",
  },
];

export default function AppointmentScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.textTitle}>Next Appointment</Text>
      <DevelopmentItem
        date={dayjs("2024-06-03 09:30").format("lll")}
        description="Dr. Ashley"
        name="calendar-month"
        title="Prenatal visit"
      />
      <Text style={styles.textTitle}>All Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DevelopmentItem
            date={dayjs(item.date).format("lll")}
            description={item.description}
            name={item.icon}
            title={item.title}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <AddButton />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
