import { Image, StyleSheet, Text, View } from 'react-native';
import TextHeader from './TextHeader';
import colors from '../config/colors';

export default function ImageContent({url, title, description}) {
return (
<View style={styles.container}>
    <Image source={url} style={styles.image} />
    <TextHeader>{title}</TextHeader>
    <Text style={styles.description}>{description}</Text>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    description: {
        color: colors.active,
    },
    image: {
        borderRadius: 5,
        objectFit: 'contain',
        width: '100%',
    },
});