import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import laungimage from '../assets/lounge.jpg';
// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';


export default function Homescreen() {

  const navigation = useNavigation();
  return (

    <View style={styles.main}>

      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>Hello, Anderson</Text>
        <Text style={styles.txt}>You have 4 active devices</Text>
      </View>

      <View style={styles.quickcontainer}>
        <Text style={styles.heading}>Quick view</Text>

        <View style={styles.videoConatiner}>
          <View style={styles.quickimg}>
            <Text style={styles.imgtxt}>Front</Text>
            <ImageBackground source={laungimage} resizeMode="cover" style={styles.imagevertical}>
            </ImageBackground>
          </View>
          <View style={styles.roWvideoConatiner}>
            <View style={styles.quickimg2}>
              <Text style={styles.imgtxt}>Living room</Text>
            </View>
            <View style={styles.quickimg2}>
              <Text style={styles.imgtxt}>Garage</Text>
            </View>
          </View>

        </View>




      </View>
      {/*  */}
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.bg}  onPress={() => navigation.navigate('Devicescreen')}>
          <View style={styles.btn}>
            <Text>
              {/* <Feather name="share-2" size={24} color="black" /> */}
              <MaterialIcons name="device-hub" size={30} color="skyblue" />
            </Text><Text>View all devices</Text></View>
        </TouchableOpacity>
        <View style={styles.bgdbtn}>
          <TouchableOpacity style={styles.btnd} onPress={() => navigation.navigate('Statusscreen')}><Text> <Ionicons name="stats-chart" size={24} color="skyblue" style={{ padding: 9 }} /> Stats</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnd} onPress={() => navigation.navigate('Recording')}><Text>  <AntDesign name="videocamera" size={24} color="skyblue" /> Recording</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnd}  onPress={() => navigation.navigate('SettingScreen')}><Text> <AntDesign name="setting" size={24} color="skyblue" /> Setting</Text></TouchableOpacity>
        </View>

      </View>
      {/* <Footer /> */}
      {/* <View style={styles.flexdown}>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // backgroundColor: "yellow",
    padding: 10,
    margin: 10
  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 9,
    padding: 25,
  },
  headingcontainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,

  },
  quickcontainer: {
    display: "flex",
    flex: 5,
    marginBottom: 20,
    marginTop: 40,
  },
  multiVideo: {
    display: "flex",
  },
  btncontainer: {
    display: "flex",
    flex: 1,
  },
  bg: {

    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  bgdbtn: {

    height: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 10,
  },
  btn: {

    width: "35%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'skyblue',
  },
  btnd: {

    width: "33%",
    height: "100%",
    backgroundColor: "white",
    // display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'skyblue',
    // padding:10,
    // margin:9
  },
  // quickflex: {
  //   display: "flex",
  //   flexDirection: "row",
  //   flex: 1,
  //   // justifyContent:"space-between",
  //   marginTop: 20,
  // },
  quickimg: {
    // display: "flex",
    // flexDirection: "column",
    // flex: 1,
    // justifyContent:"space-between"
    // borderWidth: 1,
    // borderColor: '#fff',

    backgroundColor: '#68a0cf',
    borderRadius: 20,
    elevation: 8,
    shadowColor: 'skyblue',
    width: "60%",
  },


  quickimg2: {
    // display: "flex",
    // flexDirection: "column",
    // flex: 5,
    // justifyContent: "space-between",
    margin: 10,
    height: "45%",


    // borderWidth: 1,
    // borderColor: '#fff',
    backgroundColor: '#68a0cf',
    borderRadius: 20,
    elevation: 8,
    shadowColor: 'skyblue',
    // marginBottom: "3%"
  },
  // imagevertical: {
  //   height: "100%",
  //   // width: "100%",
  //   backgroundColor: "green",


  //   // marginTop: 20,
  //   // marginRight: 40,
  //   // marginLeft: 40,
  //   // marginTop: 10,
  //   // paddingTop: 20,

  //   // paddingTop: 10,
  //   // paddingBottom: 20,
  //   backgroundColor: '#68a0cf',
  //   borderWidth: 1,
  //   // borderColor: '#fff',
  //   borderRadius: 20,
  //   elevation: 8,
  //   shadowColor: 'skyblue',

  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,

  // },
  // imagevertical2: {
  //   height: "45%",
  //   width: "100%",
  //   backgroundColor: "green",


  //   borderRadius: 10,
  //   elevation: 8,
  //   shadowColor: 'skyblue',
  // },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "black",
  },
  txt: {
    fontSize: 16,
    color: "gray",
    fontWeight: "500",
  },
  flexdown:
  {
    flex: 1,
    // position:"absolute"
    bottom:-30
  },
  imgtxt:
  {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  videoConatiner: {
    // backgroundColor: "skyblue",
    height: "90%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },

  roWvideoConatiner: {
    // backgroundColor: "green",
    // height: "40%",

    display: 'flex',
    flexDirection: 'column',
    width: "40%",
    // padding: "2%"
  }
})