import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { TextInput, Button } from 'react-native-paper';
import Loader from './loader';
import * as firebase from 'firebase';


export default function Login() {

    let [fontsLoaded, error] = useFonts({
        regular: Montserrat_400Regular,
        bold: Montserrat_700Bold
    });

    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errort, setError] = React.useState(false);
    const [error2, setError2] = React.useState(false);
    const [loader, setLoader] = React.useState(false);



    return (

        <View style={styles.container}>


            <View style={{ width: "85%" }}>
                {(errort) ? <Text
                    style={{
                        color: "red",
                        color: "red",
                        fontFamily: "regular",
                        fontSize: 12,
                        fontStyle: "italic"
                    }}> *Invalid email or password</Text> : null}

                {(error2) ? <Text
                    style={{
                        color: "red",
                        color: "red",
                        fontFamily: "regular",
                        fontSize: 12,
                        fontStyle: "italic"
                    }}> *You cannot leave it empty</Text> : null}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:60}}>

                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }}
                        label="Name"
                        value={text}
                        onChangeText={text => setText(text)}
                        selectionColor="#2F4553"
                        underlineColor="white"
                    />

                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }}
                        label="Card Number"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        selectionColor="#2F4553"
                        underlineColor="white" />
                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }}
                        label="Expriy date"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        selectionColor="#2F4553"
                        underlineColor="white" />
                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 20, width: "100%", color: "white", fontFamily: "regular", fontSize: 14 }}
                        label="CVV"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        selectionColor="#2F4553"
                        underlineColor="white" />


                </View>


                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <Button
                        mode="contained"
                        style={{ width: "100%", height: 60, justifyContent: 'center', }}
                        labelStyle={{ color: "white", fontFamily: "bold", fontSize: 12 }}
                        color="#2F4553" > MAKE PAYMENT </Button>



                </View>


            </View>
        </View >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    textCon: {
        height: "35%",
        width: "100%",

        alignItems: 'center',
        justifyContent: "center"

    },
    title: {
        fontFamily: "bold",
        fontSize: 20,
        color: "#2F4553"

    },
    subtitle: {
        fontFamily: "regular",
        fontSize: 14,
        color: "#2F4553",
        opacity: .3
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',


    },
    linearGradient: {
        width: 60,
        height: 70
    },
});
