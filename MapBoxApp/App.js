import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN);

const App = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>This is MapBox</Text>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        color: '#06444f',
    }
});

export default App;
