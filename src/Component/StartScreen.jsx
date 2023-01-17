import React, { useEffect, useState } from 'react';
import splashScreen2 from '../assets/splashScreen2.png';
import { ImageBackground, StyleSheet, Text, Image, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signup from './Signup';


export default function StartScreen() {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(false);
        setTimeout(() => {
            setloading(true) // 1
        }, 5000);
    }, [])



    return (

        <View style={styles.container}>
            {loading ? <Signup /> : <Image source={require('../assets/splashScreen2.png')} style={styles.backgroundImage} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: null,
        height: null,
    },
    backgroundImage: {
        // width:"105%",
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        //   width: '70%',
        //   height:"5%" 
    },
})