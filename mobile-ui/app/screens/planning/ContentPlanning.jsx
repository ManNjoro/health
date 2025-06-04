import { FlatList, StyleSheet } from "react-native";
import Screen from "../../components/Screen";
import ImageContent from "../../components/ImageContent";

const content = [
  {
    id: 1,
    title: "How to manage endometriosis",
    description: "2 min read",
    imageUrl: require("../../assets/endometrisis.png"),
  },
  {
    id: 2,
    title: "What to expect from pregnancy tests",
    description: "2 min read",
    imageUrl: require("../../assets/test.png"),
  },
  {
    id: 3,
    title: "Dealing with PMS",
    description: "2 min read",
    imageUrl: require("../../assets/pms.png"),
  },
];

export default function ContentPlanning() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={content}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageContent
            description={item.description}
            title={item.title}
            url={item.imageUrl}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});
