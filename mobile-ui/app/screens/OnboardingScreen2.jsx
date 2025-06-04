import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import OnboardingItem from "../components/OnboardingItem";

export default function OnboardingScreen2() {
  return (
    <OnboardingItem
      bodyText="Personalized Health Tips"
      bodyTextDescription="Receive expert guidance tailored to your pregnancy or post-natal stage."
      imageUrl={require("../assets/onboarding2.png")}
    />
  );
}
