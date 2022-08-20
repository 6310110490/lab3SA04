import React from "react";
import { FlatList, View ,StatusBar, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Muang Songkhla', code: '90000' },
    { place: 'Hat yai', code: '90110' },
    { place: 'Sa Dao', code: '90120' },
    { place: 'Chana', code: '90130' },
    { place: 'Ranot', code: '90140' },
    { place: 'Thepha', code: '90150' },
    { place: 'Na Thawi', code: '90160' },
    { place: 'Rattapum', code: '90180' },
    { place: 'Sating Phra', code: '90190' },
    { place: 'Sabayoi', code: '90210' },
    { place: 'Kuan Niang', code: '90220' },
    { place: 'Khlong Hoykhong', code: '90230' },
    { place: 'Krasae Sin', code: '90270' },
    { place: 'Na Mom', code: '90310' },
    { place: 'Singha Nakorn', code: '90330' },
    
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code, place})
    }}> 
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    zipPlace: {
        flex: 2,
        paddingLeft: 30,
    },
    zipCode: {
        flex: 1,
    }
}) 