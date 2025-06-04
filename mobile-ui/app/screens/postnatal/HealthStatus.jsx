import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import MoodItem from "./MoodItem";
import colors from "../../config/colors";

const healingTips = [
  {
    id: 1,
    title: "Drink enough water",
    icon: "check",
  },
  {
    id: 2,
    title: "Get plenty of rest",
    icon: "check",
  },
  {
    id: 3,
    title: "Avoid heavy lifting",
    icon: "check",
  },
];

export default function HealthStatus() {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.progressSection}>
          <Text style={styles.progressTitle}>Recovery progress</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progress}></View>
          </View>
          <Text style={styles.percentage}>20% complete</Text>
        </View>
        <View style={styles.tipsContainer}>
          <Text style={styles.textTitle}>Tips for healing</Text>
          {healingTips.map((tip) => (
            <View key={tip.id} style={styles.tip}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <MaterialCommunityIcons name={tip.icon} size={20} />
            </View>
          ))}
        </View>
        <View style={styles.moodContainer}>
          <Text style={styles.textTitle}>Track your mood</Text>
          <MoodItem
            imageUrl={require("../../assets/mood1.png")}
            subtitle="38%"
            title="Anxiety"
          >
            <Text style={styles.moodText}>
              Last 7 days <Text style={styles.moodTextPercent}>+10%</Text>
            </Text>
          </MoodItem>
          <MoodItem
            imageUrl={require("../../assets/mood2.png")}
            subtitle="25%"
            title="Depression"
          >
            <Text style={styles.moodText}>
              Last 7 days <Text style={styles.moodTextPercent}>+5%</Text>
            </Text>
          </MoodItem>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  moodText: {
    color: colors.active,
    fontSize: 16,
  },
  moodTextPercent: {
    color: colors.primary,
  },
  percentage: {
    color: colors.active,
    fontSize: 14,
    fontWeight: "regular",
  },
  progress: {
    backgroundColor: colors.primary,
    height: "100%",
    width: "20%",
  },
  progressContainer: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    height: 10,
    marginVertical: 5,
    overflow: "hidden",
    width: "100%",
  },
  progressSection: {
    marginVertical: 10,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "medium",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  tip: {
    flexDirection: "row",
    marginVertical: 8,
    width: "99%",
  },
  tipsContainer: {
    width: "100%",
  },
  tipTitle: {
    flexGrow: 1,
  },
});
