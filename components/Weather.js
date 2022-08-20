import React, { useState } from "react"
import { Text, View, ImageBackground, StyleSheet } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>Zip Code is {props.zipCode}.</Text>
                        <Forecast {...forecastInfo} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        alignItems: 'center'
    },
    backdrop: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 24,
        margin: 15   
    }
});
   