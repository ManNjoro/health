import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import TextHeader from "../components/TextHeader";

export default function PredictionScreen({ route }) {
  const data = route.params;
  console.log("data", data);
  return (
    <View style={styles.container}>
      {data.risk && (
        <TextHeader>
          Risk Level:{" "}
          <TextHeader
            style={{ color: data.risk === "High" ? "red" : "green" }}
          >
            {data.risk}
          </TextHeader>
        </TextHeader>
      )}
      {data.recommendation && (
        <Text style={styles.description}>{data.recommendation}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
  },
});
