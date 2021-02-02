import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import * as Location from 'expo-location';
import Loader from './loader'
import { Button } from 'react-native-paper';

export default function Map({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('map')
    }

    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };
    const GOOGLE_MAPS_APIKEY = '';

    const [state, setState] = useState({
        latitude:  37.78825,
        longitude: -122.4324,
    })
    const [location, setLocation] = useState({
        coords: {
            latitude: 37.78825,
            longitude: -122.4324
        }
    });
    const [errorMsg, setErrorMsg] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location);
    //         setState({
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //         })
    //     })();



    // }, [])
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (state.latitude == null) {
        return (<Loader />)
    }
    else {
        return (
            <View>


                <MapView
                    style={{ width: "100%",height:"100%" }}
                    initialRegion={{
                        latitude: state.latitude,
                        longitude: state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                    />

                </MapView>
                {/* <Button mode="contained"
                    style={{
                        width: "85%", height: 60, justifyContent: 'center', marginLeft:"auto", marginRight:"auto"
                    }}
                    labelStyle={{
                        color: "white",
                        fontFamily: "bold",
                        fontSize: 12
                    }}
                    color="#2F4553" onPress={pressHandler}> Make Payment</Button> */}
            </View>
        )
    }
}