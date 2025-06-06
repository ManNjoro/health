import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import colors from '../config/colors';

export default function Paginator({data=[], scrollX}) {
    const {width} = useWindowDimensions()
return (
<View style={styles.container}>
    {data.map((_, i) => {
        const inputRange = [(i-1)* width,i*width,(i+1)*width]
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10,20,10],
            extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3,1,0.3],
            extrapolate: 'clamp',
        })
        return <Animated.View key={i.toString()} style={[styles.dot, {width: dotWidth, opacity}]}/>
})}
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: colors.greenDark,
        justifyContent:'center'
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: colors.active
    }
});