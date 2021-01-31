
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as firebase from 'firebase';
// import { useTheme } from './provider/context'
import { LinearGradient } from 'expo-linear-gradient';


export default function dashboard2({ navigation }) {


    var values = [{
        revenue: "1200",
        bookings: "6",
        freeslots: "6"
    },


    ]

    const pressHandler = () => {
        navigation.navigate('DeviceList')
    }

    const signOut = () => {
        firebase.auth().signOut()

    }

    const connectDevice = (item) => {

        navigation.navigate('parkingLot', item)
    }

    const renderItem = ({ item }) => {

        return (
            <View >
                <TouchableOpacity onPress={() => { connectDevice(item) }}>
                    <LinearGradient
                        colors={['#F3F3F3', '#F3F3F3']}
                        style={styles.button}>
                        <View>
                            <Text style={styles.itemName}>{item.revenue}</Text>
                            <Text style={styles.itemDes}>{item.location}</Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                        </View>
                    </LinearGradient>


                </TouchableOpacity>
            </View>)
    }

    return (
        <View style={styles.container}>
            <View style={{ width: "90%", height: "100%" }}>

                <Text style={styles.subtitle}>Nearest Parking slots</Text>
                <View style={styles.itemContainer}>
                    <View style = {{height:"85%",width:"100%", justifyContent: "space-between", flexDirection:'row',flexWrap:'wrap',}}>
                        <View style={styles.button}>
                    
                                <LinearGradient
                                    colors={['#F3F3F3', '#F3F3F3']}
                                  >
                                    <View>
                                        <Text style={styles.itemName}>Revenue</Text>
                                        <Text style={styles.itemDes}>Rs 1000</Text>
                                    </View>
                                </LinearGradient>


                        </View>


                        <View style={styles.button}>
                     
                                <LinearGradient
                                    colors={['#F3F3F3', '#F3F3F3']}
                                    >
                                    <View>
                                        <Text style={styles.itemName}>bookings</Text>
                                        <Text style={styles.itemDes}>6</Text>
                                    </View>
                                </LinearGradient>


                  
                        </View>

                        <View style={styles.button} >
                          
                                <LinearGradient
                                    colors={['#F3F3F3', '#F3F3F3']}
                                   >
                                    <View>
                                        <Text style={styles.itemName}>Free slots</Text>
                                        <Text style={styles.itemDes}>10</Text>
                                    </View>
                                </LinearGradient>


                        </View>
                    </View>

                    <View >
                        <View style={{
                            width: "100%", height: 60, flexDirection: "row", justifyContent: "space-around",
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('qrcode') }}>
                                <View style={{
                                    backgroundColor: "#4AFDC2", width: 60, height: 60, borderRadius: 50, justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <Image source={require("../assets/qr.png")} style={{
                                        width: 20,
                                        height: 20,
                                    }} />

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('payment') }}>
                                <View style={{
                                    backgroundColor: "#4AFDC2", width: 60, height: 60, borderRadius: 50, justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <Image source={require("../assets/money.png")} style={{
                                        width: 20,
                                        height: 20,
                                    }} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={signOut}>
                                <View style={{
                                    backgroundColor: "#4AFDC2", width: 60, height: 60, borderRadius: 50, justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <Image source={require("../assets/logout.png")} style={{
                                        width: 20,
                                        height: 20,
                                    }} />
                                </View>
                            </TouchableOpacity>

                        </View >

                    </View >


                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        position: "relative",
        height: "100%"

    },

    subtitle: {
        marginTop: 20,
        marginBottom: 20,
        color: "#2F4553",
        fontFamily: "regular",
    },

    itemName: {
        marginLeft: 20,
        marginTop: 20,
        fontFamily: "bold",
        fontSize: 12
    },
    itemDes: {
        marginLeft: 20,
        marginTop: 10,
        fontFamily: "regular",
        fontSize: 20
    },
    itemPrice: {
        marginLeft: 20,
        marginTop: 10,
        fontFamily: "bold",
        fontSize: 16
    },
    button: {
        width:"100%",
        height: 150,
        marginBottom: 20,
        flex: 1,
        margin: 1,
        borderRadius: 10,
        flexDirection: "row",
       

    },
    itemContainer: {
        height: "85%",
        justifyContent: "space-between"
    },

    itemImage: {
        width: "45%",
        height: "100%",
        borderRadius: 10,

    },
    image: {

        width: 250,
        height: 250,
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',


    },



});
