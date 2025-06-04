import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import TextHeader from "../../components/TextHeader";
import colors from "../../config/colors";

export default function PregnantContent() {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextHeader>Health & Nutrition</TextHeader>
        <View>
          <Image
            source={require("../../assets/nutrition.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>
              The 6 Best Foods for Your Pregnancy Diet
            </Text>
            <Text style={styles.description}>by Dr. Amanda Tavoularis</Text>
            <Text style={styles.description}>5 min read</Text>
          </View>
        </View>
        <TextHeader>Videos</TextHeader>
        <View>
          <Image
            source={require("../../assets/video.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>Preparing for labor and delivery</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    borderRadius: 5,
    marginBottom: 10,
    objectFit: "contain",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    color: colors.active,
    marginTop: 5,
  },
});
