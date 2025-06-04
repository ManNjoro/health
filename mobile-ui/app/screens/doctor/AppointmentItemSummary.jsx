import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../../components/Icon";

export default function AppointmentItemSummary({
  name = "calendar",
  title,
  type = "video",
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <>
        <View style={styles.time}>
          <Icon
            name={name}
            size={36}
            backgroundColor="#F5F0E5"
            iconColor="black"
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Icon
          name={type}
          size={56}
          backgroundColor="transparent"
          iconColor="black"
        />
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  time: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginLeft: 10,
  },
});
