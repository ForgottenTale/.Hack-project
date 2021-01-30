
import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
export default function DeviceConnect({ navigation }) {

    var name = navigation.getParam('title');
    var location = navigation.getParam('location');
    var star = navigation.getParam('star');
    var des = navigation.getParam('des');

    const pressHandler=()=>{
        navigation.navigate('map')
    }
    return (

        <View style={styles.container}>
            <Image source={require("../assets/img.jpg")} style={styles.itemImage} />

            <View style={{ width: "88%", height: "60%" }}>
                <Text style={styles.title}>{name}</Text>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-between', }}>
                    <Text>{location}</Text>
                    <Text>{star} / 5</Text>
                </View>
                <View style={{ width: "100%" }}>
                    <Text style={styles.des}>{des}</Text>

                </View>

            </View>
            <Button mode="contained"
                style={{
                    width: "85%", height: 60, justifyContent: 'center'
                }}
                labelStyle={{
                    color: "white",
                    fontFamily: "bold",
                    fontSize: 12
                }}
                color="#2F4553" onPress={pressHandler}> GET DIRECTIONS </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        position: "relative",
        height: "100%"

    },
    itemImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,

    },
    title: {
        fontFamily: "bold",
        fontSize: 20,
        marginTop: 25,
    },
    des: {
        fontFamily: "regular",
        fontSize: 18,
        marginTop: 25,
    }
})