import { StyleSheet, Text, View } from 'react-native';

export default function TextHeader({children, style}) {
return (
<Text style={[styles.textTitle, {...style}]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
      },
});