import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Screen from "../../components/Screen";
import SummaryCard from "./SummaryCard";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";

const summaryDetails = [
  {
    id: 1,
    title: "Blood Pressure",
    value: "110/70",
  },
  {
    id: 2,
    title: "Weight",
    value: "143lbs",
  },
  {
    id: 3,
    title: "Baby's Weight",
    value: "2.5lbs",
  },
  {
    id: 4,
    title: "Baby's Heart Rate",
    value: "145bpm",
  },
];

export default function HealthMonitoringScreen({ numberOfColumns = 2 }) {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={summaryDetails}
          key={numberOfColumns.toString()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SummaryCard title={item.title} value={item.value} />
          )}
          numColumns={numberOfColumns}
          columnWrapperStyle={styles.columnWrapper}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListFooterComponent={
            <View style={styles.graphContainer}>
              <Text style={styles.valueTitle}>Blood Pressure</Text>
              <Text style={styles.value}>110/70</Text>
              <Text style={styles.graphTitle}>
                Last 30 days <Text style={styles.graphPercentage}>+0%</Text>
              </Text>
              <Image
                source={require("../../assets/bp.png")}
                style={styles.image}
              />
              <Text style={styles.valueTitle}>Weight</Text>
              <Text style={styles.value}>143lbs</Text>
              <Text style={styles.graphTitle}>
                Last 30 days <Text style={styles.graphPercentage}>+0%</Text>
              </Text>
              <Image source={require("../../assets/weight.png")} />
              <AppButton title="Show All Health Data" />
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 10,
  },
  graphContainer: {
    marginVertical: 10,
  },
  graphPercentage: {
    color: "green",
  },
  graphTitle: {
    color: colors.active,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 10,
  },
  image: {
    objectFit: "contain",
  },
  itemSeparator: {
    height: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  value: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 5,
  },
  valueTitle: {
    fontSize: 16,
  },
});
