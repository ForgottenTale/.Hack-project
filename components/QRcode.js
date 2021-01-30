import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default function QRcode() {


    return(<View style={{height:"100%",justifyContent:"center",alignItems: 'center',}}>
   <Image source={require("../assets/qrcode.png")} style={{
                  width: 200,
                  height: 200,
                }} />
    </View>)
}