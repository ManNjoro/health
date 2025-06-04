import AppIntroSlider from "react-native-app-intro-slider";
import OnboardingItem from "../components/OnboardingItem";
import slides from "../data/slides";
import colors from "../config/colors";

export default function OnboardingScreen({ navigation }) {
  return (
    <AppIntroSlider
      activeDotStyle={{
        backgroundColor: colors.active,
        width: 15,
      }}
      data={slides}
      dotClickEnabled
      keyExtractor={(item) => item.id.toString()}
      onDone={() => navigation.navigate("Welcome")}
      renderItem={({ item }) => (
        <OnboardingItem
          bodyText={item.bodyText}
          bodyTextDescription={item.bodyTextDescription}
          imageUrl={item.imageUrl}
        />
      )}
      showPrevButton
      showSkipButton
    />
  );
}
