import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';

export default function NoContentScreen() {
return (
<Screen>
    <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>No Content Available</Text>
    </View>
</Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});