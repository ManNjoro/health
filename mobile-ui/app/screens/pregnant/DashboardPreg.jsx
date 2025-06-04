import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import ImageInfo from "../../components/ImageInfo";
import Action from "../../components/Action";

const developments = [
  {
    id: 1,
    title: "Week 13",
    description:
      "Your baby is the size of a lemon",
    image: require("../../assets/week13.png"),
  },
  {
    id: 2,
    title: "Week 14",
    description: "Your baby can now squint, frown and grimace",
    image: require("../../assets/week14.png"),
  },
  {
    id: 3,
    title: "Week 15",
    description: "Your baby now has taste buds",
    image: require("../../assets/week15.png"),
  },
];

export default function DashboardPreg({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>Welcome to week 13!</Text>
        <Text>Your baby is the size of a lemon</Text>
        {/* <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.touchableLinksContainer}>
              <Action
                title="Baby's Development"
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Health & Development")}
              />
              <Action
                title="Health Monitoring"
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Summary")}
              />
              <Action
                title="Upcoming Appointments"
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Appointments")}
              />
            </View>
          </ScrollView>
        </View> */}
        <Text style={styles.textTitle}>Your Baby&apos;s Development</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.developmentsContainer}>
              {developments.map((development) => (
                <ImageInfo key={development.id} url={development.image}>
                  <Text style={styles.developmentTitle}>
                    {development.title}
                  </Text>
                  <Text>{development.description}</Text>
                </ImageInfo>
              ))}
            </View>
          </ScrollView>
        </View>
        <Text style={styles.textTitle}>Health Monitoring</Text>
        <View style={styles.monitoringContainer}>
          <View>
            <Text>Blood Pressure</Text>
            <Text style={styles.metricValue}>120/80 mmHg</Text>
          </View>
          <Text>Normal</Text>
        </View>
        <View style={styles.monitoringContainer}>
          <View>
            <Text>Weight</Text>
            <Text style={styles.metricValue}>110 lbs</Text>
          </View>
          <Text>Normal</Text>
        </View>
        <Text style={styles.textTitle}>Upcoming Appointments</Text>
        <View style={styles.appointmentsContainer}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Prenatal visit</Text>
            <Text style={styles.metricValue}>Dr.Michoma</Text>
            <TouchableOpacity style={styles.calendar}>
              <Text>Add to calendar</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            source={require("../../assets/doc.png")}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  appointmentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  calendar: {
    backgroundColor: colors.gray,
    borderRadius: 18,
    padding: 10,
    height: 45,
    marginVertical: 5,
  },
  container: {
    padding: 10,
    marginBottom: 10,
  },
  developmentsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  developmentTitle: {
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  image: {
    resizeMode: "contain",
    width: 200,
  },
  monitoringContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  metricValue: {
    color: colors.active,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  touchableLinks: {
    backgroundColor: colors.gray,
    borderRadius: 18,
    padding: 10,
    height: 45,
    marginRight: 10,
  },
  touchableLinksContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
