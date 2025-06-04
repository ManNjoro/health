import { Animated, FlatList, StyleSheet, View } from "react-native";
import OnboardingItem from "../components/OnboardingItem";
import Screen from "../components/Screen";
import slides from "../data/slides";
import { useRef, useState } from "react";
import Paginator from "../components/Paginator";

export default function OnboardingCustomScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <Screen>
      <View style={{ flex: 3 }}>
        <FlatList
          bounces={false}
          data={slides}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <OnboardingItem
              bodyText={item.bodyText}
              bodyTextDescription={item.bodyTextDescription}
              imageUrl={item.imageUrl}
            />
          )}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
  },
});
