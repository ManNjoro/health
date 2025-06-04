import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

export default function SummaryCard({title, value}) {
return (
<View style={styles.container}>
    <Text style={title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: 110,
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16
    }
});