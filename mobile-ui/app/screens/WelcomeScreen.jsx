import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.logoSection}>
        <Image style={styles.image} source={require("../assets/logo1.png")} />
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.logoTextTitle}>Babysteps</Text>
          <Text style={styles.logoTextDescription}>
            Growing with love, one step at a time
          </Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Welcome to BABYSTEPS</Text>
        <Text style={styles.bodyTextDescription}>
          Your Personalized Health Journey
        </Text>
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <AppButton
          title="Login"
          color="gray"
          onPress={() => navigation.navigate("Login")}
          textColor="dark"
        />
        <View style={styles.buttonContainer}>
          <AppButton
            title="English"
            color="gray"
            textColor="dark"
            width="50%"
          />
          <AppButton
            title="Kiswahili"
            color="gray"
            textColor="dark"
            width="50%"
          />
        </View>
        <AppButton title="Continue with USSD" color="gray" textColor="dark" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    padding: 20,
  },
  bodyText: {
    fontSize: 32,
    fontWeight: "bold",
    maxWidth: "80%",
  },
  bodyTextDescription: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    height: 100,
  },
  logoSection: {
    backgroundColor: colors.primary,
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  logoTextDescription: {
    color: colors.gray,
    fontFamily: "Poppins",
  },
  logoTextTitle: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.gray,
  },
});
