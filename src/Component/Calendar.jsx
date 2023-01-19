import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Footer from './Footer';

export default function CalenderScreen() {


    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [SelectedEndDate, setSelectedEndDate] = useState(null);

    console.log(selectedStartDate, "selectedStartDate");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            // alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            // width:"50%",
            elevation: 15,
            borderRadius: 10,
            backgroundColor: "white",
            marginVertical: 10,
            marginHorizontal: 20,
            paddingHorizontal: 10,
            // flexDirection: 'row',
            alignItems: 'center',
        },
        // input: {
        //     height: 40,
        //     margin: 12,
        //     borderWidth: 1,
        // },
        // backgroundColor:"red",
        // dateText: {
        //     margin: 16,
        // },
        // btncontainer: {
        //     display:"flex",
        //     flex:1,
        //   },
        btncontainer: {
            display: "flex",
            flexDirection: "row",
            marginTop: '-8%'
            //  marginLeft:"20%",
            // marginRight:30,
        },
        btnHeader: {
            borderRadius: 4,
            backgroundColor: '#F2F2F2',
            minWidth: '15%',
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
        btnHeaderDone: {
            borderRadius: 4,
            backgroundColor: '#22709E',
            minWidth: '15%',
            textAlign: 'center',
            color: 'white',
            shadowColor: 'gray',
            borderRadius: 10,
            elevation: 4,
            height: 35,
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            paddingTop: "2%",
            marginRight: 5,
            fontSize: 18,
            fontFamily:"bold"
        },
        flexdown: {
            // flex: 1
        },
        btnClose: {
            marginTop: "10%",
            backgroundColor: "#22709E",
            minWidth: '25%',
            textAlign: 'center',
            color: 'white',
            height: 35,
            fontWeight: "38",
            fontSize: 23
        }

    });
    return (
        <View style={styles.container}>

            <Calendar
                // onDateChange={setSelectedStartDate}\
                style={{
                    // borderWidth: 1,
                    borderColor: 'red',
                    height: 390,
                    width: 390
                }}
                onDayPress={day => {
                    console.log('selected day', day);
                    setSelectedStartDate(day.dateString)

                }}
                display="inline"
                onDayLongPress={day => {
                    console.log('selected ENd day', day);
                    setSelectedEndDate(day.dateString)
                }}
                // monthFormat={'yyyy MM'}
                onMonthChange={month => {
                    console.log('month changed', month);
                }}
                showWeekNumbers={true}
                enableSwipeMonths={true}
            />

            {/* <View style={styles.btncontainer}>
                <Text style={styles.btnHeader}>Start with {selectedStartDate}</Text>
                <Text style={styles.btnHeader} >End With {SelectedEndDate}</Text>
            </View> */}

            <View style={styles.btncontainer}>
                <Text style={styles.btnHeader}>Remove {selectedStartDate}</Text>
                <Text style={styles.btnHeaderDone} >Done{SelectedEndDate}</Text>
            </View>


            {/* <View style={styles.btncontainer}>
                <Text style={styles.btnHeader}>Start with {selectedStartDate}</Text>
                <Text style={styles.btnHeader} >End With {SelectedEndDate}</Text>
            </View> */}

            <Text style={styles.btnClose} >Done {SelectedEndDate}</Text>

            {/* <Text style={styles.btnHeader}>{selectedStartDate === null ? "Start with " : selectedStartDate}</Text> */}
            {/* <View style={styles.flexdown}>
            <Footer />
            </View> */}
        </View>

    );
}