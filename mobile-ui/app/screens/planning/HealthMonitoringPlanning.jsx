import { FlatList, Image, StyleSheet, View } from "react-native";
import Screen from "../../components/Screen";
import SummaryCard from "../pregnant/SummaryCard";
import TextHeader from "../../components/TextHeader";

const summaryDetails = [
  {
    id: 1,
    title: "Steps",
    value: "8,234",
  },
  {
    id: 2,
    title: "Heart Rate",
    value: "74bpm",
  },
  {
    id: 3,
    title: "Sleep",
    value: "7h 23m",
  },
  {
    id: 4,
    title: "Weight",
    value: "112lbs",
  },
];

export default function HealthMonitoringPlanning({ numberOfColumns = 2 }) {
  return (
    <Screen style={styles.container}>
      <TextHeader>Wellness</TextHeader>
      <FlatList
        data={summaryDetails}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numberOfColumns}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (
          <SummaryCard title={item.title} value={item.value} />
        )}
        ListFooterComponent={
          <>
            <TextHeader>Monthly Report</TextHeader>
            <Image
              source={require("../../assets/report.png")}
              style={styles.image}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 10,
  },
  container: {
    margin: 10
},
  image: {
    width: "100%",
    objectFit: "contain",
  },
  itemSeparator: {
    height: 10,
  },
});
