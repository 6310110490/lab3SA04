import React, { useEffect, useState } from "react"
import { Text, View, ImageBackground, StyleSheet } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=5548818ef28cf2548cff7e29651d7259`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

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
   