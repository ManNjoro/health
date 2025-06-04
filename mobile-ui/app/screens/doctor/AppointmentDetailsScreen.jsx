import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import Screen from "../../components/Screen";
import TextHeader from "../../components/TextHeader";
import Icon from "../../components/Icon";
import colors from "../../config/colors";
import ListItemSeparator from "../../components/ListItemSeparator";

dayjs.extend(localizedFormat);

const healthData = [
  {
    id: 1,
    title: "Weight",
    value: "110 lbs",
  },
  {
    id: 2,
    title: "Height",
    value: "5'6",
  },
  {
    id: 3,
    title: "Blood Pressure",
    value: "120/80 mmHg",
  },
  {
    id: 4,
    title: "Heart Rate",
    value: "70 bpm",
  },
];
const HealthItem = ({ title, value }) => (
  <View style={styles.healthContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function AppointmentDetailsScreen() {
  return (
    <Screen style={styles.container}>
      <TextHeader>Appointment Details</TextHeader>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Image
            source={require("../../assets/patient.png")}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.title}>John Meyer</Text>
            <Text style={styles.description}>
              {dayjs("2024-06-03 10:00").format("lll")}
            </Text>
          </View>
        </View>
        <Icon
          backgroundColor="transparent"
          name="video-outline"
          size={56}
          iconColor="black"
        />
      </View>
      <TextHeader>Health Summary</TextHeader>
      {/* <ScrollView>
        {
            healthData.map(item => (
                <HealthItem key={item.id} title={item.title} value={item.value}/>
            ))
        }
      </ScrollView> */}
      <FlatList
        data={healthData}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <HealthItem title={item.title} value={item.value} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  description: {
    color: colors.active,
  },
  details: {
    marginLeft: 20,
  },
  healthContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    alignItems: "center",
    flexDirection: "row",
  },
  infoContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16
  },
  value: {
    fontSize: 16
  }
});
