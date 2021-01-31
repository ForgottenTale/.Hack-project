import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../components/Dashboard';
import parkingLot from '../components/parkingLot';
import map from '../components/map'
import Payment from '../components/payment'

import React from 'react';
import {  Text } from 'react-native';
import QRcode from '../components/QRcode';
import Owner from '../components/ownerDashboard'; 


const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Dashboard</Text> )
        },
    },
    parkingLot: {
        screen: parkingLot,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Parking Lot</Text> )
        },
    },
    map:{
        screen: map,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>Map</Text> )
        },
    },
    qrcode:{
        screen: QRcode,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>QR code</Text> )
        },
    },
    payment:{
        screen: Payment,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>QR code</Text> )
        },
    },
    owner:{
        screen: Owner,
        navigationOptions: {
            headerTitle:  () => (<Text style={{ fontFamily: "bold" }}>QR code</Text> )
        },
    }



}

const routes = createStackNavigator(screens);

export default createAppContainer(routes);