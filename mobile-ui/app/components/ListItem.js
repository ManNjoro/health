import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (

      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});