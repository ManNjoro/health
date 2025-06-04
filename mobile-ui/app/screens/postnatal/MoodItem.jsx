import { Image, StyleSheet, Text, View } from 'react-native';

export default function MoodItem({title, subtitle, children, imageUrl}) {
return (
<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
    {children}
    <Image source={imageUrl} style={styles.image} />
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    image: {
        objectFit: "contain",
        height: 200,
        marginVertical: 10,
        maxWidth: '100%'
    },
    subtitle:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16
    },
});