import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{props.city}</Text>
            <Text style={styles.text1}>{props.main}</Text>
            <Text style={styles.text2}>{props.description}</Text>
            <View>
                <Text style={styles.text1}>{props.temp}°C</Text>
            </View>
            <Text style={styles.text2}>humidity: {props.humidity}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text1: {
        fontSize: 35,
        margin: 15,
        fontStyle: 'italic',
        color: '#8b008b'
    },
    text2: {
        fontSize: 20,
        margin: 15,
        color: '#dc143c'
    }
});