import { Image, StyleSheet, View } from "react-native";

export default function ImageInfo({ children,marginRight=10, url }) {
  return (
    <View style={[styles.container, {marginRight: marginRight}]}>
      <Image style={styles.image} source={url} />
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 160,
    overflow: "hidden",
  },
  image: {
    borderRadius: 10,
    objectFit: 'contain',
    width: 160
  },
});
