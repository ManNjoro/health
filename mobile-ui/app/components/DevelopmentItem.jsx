import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";
import Action from "./Action";

export default function DevelopmentItem({
  action,
  description,
  name,
  date,
  onPress,
  otherstyles,
  title,
  width,
}) {
  return (
    <View style={styles.container}>
      {name && (
        <Icon name={name} backgroundColor={colors.gray} iconColor="#000" />
      )}
      <View style={[styles.details, { width: width }]}>
        {title && (
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        )}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      {!date && action && (
        <Action onPress={onPress} style={otherstyles} title={action} />
      )}
      {date && <Text>{date}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  description: {
    color: colors.active,
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    width: "100%",
  },
});
