import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './Footer';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import laungimage from '../assets/lounge.jpg';
import { useNavigation } from '@react-navigation/native';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';


import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

// import { Feather } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';


export default function Notification() {
    
  const navigation = useNavigation();
    
  return (
        <View style={styles.main}>
            {/* header */}
            <View style={styles.headingconatiner}>
                {/* <SimpleLineIcons name="arrow-left" size={24} color="#1877F2" /> */}
                <Feather name="arrow-left" size={24} color="#1877F2" onPress={() => navigation.navigate('Homescreen')} />
                <Text style={styles.heading}>Notifiaction</Text>
                <AntDesign name="setting" size={24} color="#1877F2" />
            </View>
            <View style={styles.setdisplayofpage}>

                {/* body */}
                <View style={styles.bodyconatiner}>


                    <View style={styles.card}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Living room
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Bed room
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!2
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Front
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!3
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Back area
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!4
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Garage
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!5
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>





                </View>



            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({

    main: {
        paddingTop: 40,
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    setdisplayofpage: {
        display: "flex",
        flexDirection: "column",
        flex: 9,
        padding: 25,
    },
    headingconatiner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
    },
    bodyconatiner: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 8,
    },
    heading: {
        fontSize: 30,
        fontWeight: "700",
        color: "#1877F2",
    },
    headingcam: {
        fontSize: 20,
        fontWeight: "700",
    },
    headingtwo: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1877F2",
    },
    paragray: {
        color: "gray",

    },
    card: {
        display: "flex",
        flexDirection: "row",
        height: "20%",
        width: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,

    },
    cardimg: {
        height: "80%",
        width: "35%",
        marginTop: "4%",
        marginLeft: "1%"
    },
    cardbody: {
        height: "100%",
        width: "65%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    spotto: {
        height: 10,
        width: 10,
        backgroundColor: "green",
        borderRadius: 50,
    },
})