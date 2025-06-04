import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import HealthItems from "./HealthItems";
import ListItemSeparator from "../../components/ListItemSeparator";
import HealthComponent from "./HealthComponent";
import colors from "../../config/colors";
import ImageInfo from "../../components/ImageInfo";
import DevelopmentItem from "../../components/DevelopmentItem";

const mothersHealth = [
  {
    id: 1,
    title: "Weight",
    subtitle: "+2.5lbs",
  },
  {
    id: 2,
    title: "Waist",
    subtitle: "-1 inch",
  },
  {
    id: 3,
    title: "steps",
    subtitle: "3.100",
  },
  {
    id: 4,
    title: "Sleep",
    subtitle: "7hr",
  },
];

const babyMilestones = [
  {
    id: 1,
    title: "Weight",
    subtitle: "8lbs",
  },
  {
    id: 2,
    title: "Height",
    subtitle: "21 Inches",
  },
  {
    id: 3,
    title: "Feeding",
    subtitle: "every 2-3 hours",
  },
  {
    id: 1,
    title: "Diapers",
    subtitle: "10 per day",
  },
];

const feedingTips = [
  {
    id: 1,
    imageUrl: require("../../assets/tip1.png"),
    title: "Breastfeeding",
    subtitle: "Getting the right latch",
  },
  {
    id: 2,
    imageUrl: require("../../assets/tip2.png"),
    title: "Breastfeeding",
    subtitle: "Positioning your baby",
  },
  {
    id: 3,
    imageUrl: require("../../assets/tip3.png"),
    title: "Breastfeeding",
    subtitle: "Is your baby getting enough?",
  },
  {
    id: 4,
    imageUrl: require("../../assets/tip4.png"),
    title: "Breastfeeding",
    subtitle: "Breastfeeding in public",
  },
];

const appointments = [
  {
    id: 1,
    action: "Add new reminder",
    description: "Consultant",
    icon: "calendar-week",
    title: "Lactation",
  },
  {
    id: 2,
    action: "Add new reminder",
    description: "",
    icon: "calendar-week",
    title: "Pediatrician",
  },
];

export default function DashboardPostnatal({ numberOfColumns = 2 }) {
  return (
    <Screen>
      <FlatList
        columnWrapperStyle={styles.columnWrapper}
        data={feedingTips}
        key={numberOfColumns.toString()}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <HealthComponent data={mothersHealth} style={styles.motherHeader}>
              <Text style={styles.textTitle}>Mother's Health Tracking</Text>
            </HealthComponent>
            <HealthComponent data={babyMilestones} style={styles.babyHeader}>
              <Text style={styles.textTitle}>Baby's Milestones</Text>
            </HealthComponent>
            <Text style={[styles.textTitle, { marginLeft: 10 }]}>
              Feeding Tips
            </Text>
          </>
        }
        ListFooterComponent={
          <View style={styles.appointments}>
            <Text style={styles.textTitle}>Appointment Reminders</Text>
            <FlatList
              data={appointments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <DevelopmentItem
                  action={item.action}
                  description={item.description}
                  name={item.icon}
                  title={item.title}
                />
              )}
            />
          </View>
        }
        numColumns={numberOfColumns}
        renderItem={({ item }) => (
          <ImageInfo url={item.imageUrl} marginRight={0}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </ImageInfo>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  appointments: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  babyHeader: {
    backgroundColor: colors.primary,
  },
  columnWrapper: {
    gap: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  motherHeader: {
    backgroundColor: colors.gray,
  },
  subtitle: {
    color: colors.active,
    fontSize: 14,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
