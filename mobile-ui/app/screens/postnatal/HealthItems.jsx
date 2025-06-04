import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function HealthItems({ title, subtitle }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.active,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    maxWidth: 80
  },
});
