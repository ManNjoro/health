import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function DashboardItemCard({ title, count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    height: 110,
    padding: 10,
    width: 150,
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "medium",
  },
});
