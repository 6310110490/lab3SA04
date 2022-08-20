import React from "react";
import { FlatList, View ,StatusBar, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Sa Dao', code: '90120' },
    { place: 'Thepha', code: '90150' },
    { place: 'Khlong HoyKhong', code: '90230' },
    { place: 'Rattapum', code: '90180' },
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
        paddingVertical: 20,
        backgroundColor: '#696969',
    },
    zipPlace: {
        flex: 2,
        paddingLeft: 30,
        fontSize: 18
    },
    zipCode: {
        flex: 1,
        fontSize: 18
    }
}) 