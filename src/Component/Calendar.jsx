import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-datepicker';
import Footer from './Footer';
// npm install --save react-native-calendar-datepicker

export default function CalenderScreen() {


    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const startDate = selectedStartDate
        ? selectedStartDate.format('YYYY-MM-DD').toString()
        : '';
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
        },
        // backgroundColor:"red",
        dateText: {
            margin: 16,
        },
        // btncontainer: {
        //     display:"flex",
        //     flex:1,
        //   },
        btncontainer: {
            display: "flex",
            flexDirection: "row",
            marginTop: 10
            //  marginLeft:"20%",
            // marginRight:30,
        },
        btnHeader: {
            borderRadius: 4,
            backgroundColor: '#F2F2F2',
            minWidth: '25%',
            textAlign: 'center',
            color: 'skyBlue',
            shadowColor: 'gray',
            borderRadius: 10,
            elevation: 4,
            height: 35,
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            paddingTop: "2%",
            marginRight: 5,
        },
        flexdown: {
            flex: 1
        }

    });
    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <CalendarPicker onDateChange={setSelectedStartDate}
            // nextTitle=""
            />
            {/* <Text style={styles.dateText}>Start with {startDate}</Text> */}
            {/* <Text style={styles.dateText}>End With {startDate}</Text> */}

            <View style={styles.btncontainer}>
                <Text style={styles.btnHeader}>Start with {startDate}</Text>
                <Text style={styles.btnHeader} >End With {startDate}</Text>
            </View>
            <View style={styles.flexdown}>
                <Footer />
            </View>
        </View>

    );
}