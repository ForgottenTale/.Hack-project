
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as firebase from 'firebase';
// import { useTheme } from './provider/context'
import { LinearGradient } from 'expo-linear-gradient';


export default function DeviceConnect({ navigation }) {

  // const crop = useTheme();
  // const crops = crop.data
  var crops = [{
    title: "AVG Parking Garage",
    location: "Kottayam, Kerala",
    price: "Rs 20/hr",
    star: "5",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
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
            <Image source={require("../assets/img.jpg")} style={styles.itemImage} />
            <View>
              <Text style={styles.itemName}>{item.title}</Text>
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

          <FlatList
            numColumns={2}
            data={crops}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            style={{ flex: 1, }}
          />


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
    fontSize: 10
  },
  itemPrice: {
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "bold",
    fontSize: 16
  },
  button: {
    width: "100%",
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
