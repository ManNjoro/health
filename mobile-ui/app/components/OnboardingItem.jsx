import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Screen from "./Screen";
import colors from "../config/colors";

export default function OnboardingItem({
  imageUrl,
  bodyText,
  bodyTextDescription,
}) {
  const { width, height } = useWindowDimensions();
  return (
    <LinearGradient colors={['rgba(0,153,99,1)' , 'rgba(0,119,78,1)', 'rgba(20,56,43,1)']} style={[styles.container, { width }]}>
      <View style={[styles.imageContainer, { width }]}>
        <Image source={imageUrl} style={[styles.image, { width }]} />
      </View>

      <View style={[styles.textContainer, { height: height - 300 }]}>
        <Text style={styles.bodyText}>{bodyText}</Text>
        <Text style={styles.bodyTextDescription}>{bodyTextDescription}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 18,
    color: colors.gray,
    alignSelf: "center",
    marginVertical: 10,
  },
  bodyTextDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  container: {
    backgroundColor: colors.background,
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    objectFit: "contain",
  },
  textContainer: {
    padding: 10,
  },
});
