import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import DevelopmentItem from "../../components/DevelopmentItem";

const breastFeeding = [
  {
    id: 1,
    icon: "video-outline",
    title: "How to breastfeed: A guide for new parents",
  },
  {
    id: 2,
    icon: "play-circle-outline",
    title: "Breastfeeding positions",
  },
  {
    id: 3,
    icon: "video-outline",
    title: "Common breastfeeding problems and how to solve them",
  },
];

const weaningTips = [
  {
    id: 1,
    icon: "video-outline",
    title: "Baby-led weaning: what is it and is it right for you?",
  },
  {
    id: 2,
    icon: "video-outline",
    title: "When and how to stop breastfeeding",
  },
];

const nutritionTips = [
  {
    id: 1,
    icon: "video-outline",
    title: "What to eat when breastfeeding",
  },
  {
    id: 2,
    icon: "video-outline",
    title: "Your baby's first solid foods",
  },
];

export default function FeedingTips() {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.textTitle}>BreastFeeding</Text>
          {breastFeeding.map((tip) => (
            <DevelopmentItem
              key={tip.id}
              name={tip.icon}
              title={tip.title}
              width={"80%"}
            />
          ))}
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.textTitle}>Weaning</Text>
          {weaningTips.map((tip) => (
            <DevelopmentItem
              key={tip.id}
              name={tip.icon}
              title={tip.title}
              width={"80%"}
            />
          ))}
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.textTitle}>Nutrition</Text>
          {nutritionTips.map((tip) => (
            <DevelopmentItem
              key={tip.id}
              name={tip.icon}
              title={tip.title}
              width={"80%"}
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
