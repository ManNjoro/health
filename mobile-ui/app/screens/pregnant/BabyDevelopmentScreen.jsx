import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import DevelopmentItem from "../../components/DevelopmentItem";

const milestones = [
  {
    id: 1,
    title: "Smiles at people",
    description: "2m",
    action: "Log progress",
    icon: "emoticon-happy-outline",
  },
  {
    id: 2,
    title: "Can hold head up",
    description: "2-4m",
    action: "Log progress",
    icon: "baby-face-outline",
  },
  {
    id: 3,
    title: "Pushes legs down",
    description: "3m",
    action: "Log progress",
    icon: "walk",
  },
];

const motorSkills = [
  {
    id: 1,
    title: "Lifts head and chest",
    description: "2-4m",
    action: "Log progress",
    icon: "dumbbell",
  },
  {
    id: 2,
    title: "Supports upper",
    description: "3m",
    action: "Log progress",
    icon: "wheelchair-accessibility",
  },
];

export default function BabyDevelopmentScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>Next Vaccination</Text>
        <DevelopmentItem
          action="Add to Calendar"
          name="needle"
          title="Hepatitis B"
        />
        <Text style={styles.textTitle}>Milestones</Text>
        {milestones.map((item) => (
          <DevelopmentItem
            key={item.id}
            action={item.action}
            name={item.icon}
            description={item.description}
            title={item.title}
          />
        ))}
        <Text style={styles.textTitle}>Motor skills</Text>
        {motorSkills.map((item) => (
          <DevelopmentItem
            key={item.id}
            action={item.action}
            name={item.icon}
            description={item.description}
            title={item.title}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
