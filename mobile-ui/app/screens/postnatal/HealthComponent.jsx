import { FlatList, StyleSheet, View } from "react-native";
import ListItemSeparator from "../../components/ListItemSeparator";
import HealthItems from "./HealthItems";

export default function HealthComponent({
  data,
  numberOfColumns = 2,
  children,
  style,
}) {
  return (
    <>
      <View style={[styles.header, style]}>{children}</View>
      <View style={styles.trackingContainer}>
        <FlatList
          columnWrapperStyle={styles.columnWrapper}
          data={data}
          ItemSeparatorComponent={ListItemSeparator}
          key={numberOfColumns.toString()}
          keyExtractor={(health) => health.id.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <HealthItems subtitle={item.subtitle} title={item.title} />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-around",
    marginVertical: 10,
  },
  header: {
    padding: 10,
  },
  trackingContainer: {
    marginVertical: 10,
  },
});
