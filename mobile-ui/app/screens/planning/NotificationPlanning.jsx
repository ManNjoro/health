import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import TextHeader from "../../components/TextHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const plans = ["Fertility", "Mental Health", "Nutrition", "Exercise"];
const tools = [
  "Pregnancy Due Date Calculator",
  "Ovulation Calendar",
  "Baby Name Generator",
];
const articles = [
  "Why Prenatal Vitamins Are Important",
  "How to Get Pregnant: 10 Tips for Women",
  "Pre-pregnancy Checklist",
];

export const NotificationItem = ({ notification, icon }) => (
  <View style={styles.plan}>
    <Text style={styles.planTitle}>{notification}</Text>
    <MaterialCommunityIcons name={icon} size={20} />
  </View>
);

export default function NotificationPlanning() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <TextHeader>Pre-pregnancy Plan</TextHeader>
        {plans.map((plan, index) => (
          <NotificationItem key={index} notification={plan} icon='arrow-right-thin' />
        ))}
        <TextHeader>Tools & Resources</TextHeader>
        {tools.map((tool, index) => (
          <NotificationItem key={index} notification={tool} icon='arrow-right-thin' />
        ))}
        <TextHeader>Articles & Checklists</TextHeader>
        {articles.map((article, index) => (
          <NotificationItem key={index} notification={article} icon='arrow-right-thin' />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
},
  plan: {
    flexDirection: "row",
    marginVertical: 8,
    width: "99%",
  },
  planTitle: {
    flexGrow: 1,
  },
});
