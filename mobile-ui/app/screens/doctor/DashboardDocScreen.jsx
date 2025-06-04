import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import DashboardItemCard from "./DashboardItemCard";
import TextHeader from "../../components/TextHeader";
import AppointmentItemSummary from "./AppointmentItemSummary";

const data = [
  {
    id: 1,
    title: "appointments",
    count: 5,
  },
  {
    id: 2,
    title: "tasks",
    count: 1,
  },
  {
    id: 3,
    title: "reminders",
    count: 0,
  },
  {
    id: 4,
    title: "messages",
    count: 3,
  },
  {
    id: 5,
    title: "prescriptions",
    count: 2,
  },
  {
    id: 6,
    title: "EHR",
    count: 3,
  },
];

const appointments = [
  {
    id: 1,
    name: "calendar",
    title: "10:00 AM - 10:30 AM",
    type: "video-outline",
  },
  {
    id: 2,
    name: "calendar",
    title: "10:45 AM - 11:15 AM",
    type: "video-outline",
  },
  {
    id: 3,
    name: "calendar",
    title: "12:00 PM - 12:30 PM",
    type: "video-outline",
  },
  {
    id: 4,
    name: "calendar",
    title: "12:45 PM - 1:15 PM",
    type: "video-outline",
  },
  {
    id: 5,
    name: "calendar",
    title: "1:30 PM - 2:00 PM",
    type: "video-outline",
  },
];

export default function DashboardDocScreen({ numberOfColumns = 2 }) {
  return (
    <Screen style={styles.container}>
      <TextHeader>Dashboard</TextHeader>
      <View style={styles.summaryContainer}>
        <FlatList
          columnWrapperStyle={styles.columnWrapperStyle}
          data={data}
          key={numberOfColumns.toString()}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            <>
        <TextHeader>Today</TextHeader>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AppointmentItemSummary
              title={item.title}
              key={item.id}
              name={item.name}
              type={item.type}
            />
          )}
        />
      </>
          }
          ListFooterComponentStyle={styles.listFooterComponentStyle}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <DashboardItemCard
              count={item.count}
              title={item.title.replace(/^./, (char) => char.toUpperCase())}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    gap: 20,
    flex: 1,
    marginVertical: 10,
  },
  container: {
    margin: 10,
  },
  listFooterComponentStyle: {
    marginBottom: 30
  },
  summaryContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
