import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Footer() {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.containerfooter}>

        <AntDesign name="home" size={30} color="gray" onPress={() => navigation.navigate('Homescreen')} />
        <FontAwesome5 name="video" size={30} color="gray" onPress={() => navigation.navigate('Devicescreen')} />
        <Ionicons name="notifications-outline" size={30} color="gray" onPress={() => navigation.navigate('Notification')} />
        <AntDesign name="user" size={30} color="gray" onPress={() => navigation.navigate('SettingScreen')} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerfooter: {
    // backgroundColor: 'green',
    // display: "flex",
    backgroundColor:"#F5F5F5",
    justifyContent: 'space-evenly',
    alignItems: "center",
    height: 70,
    flexDirection: 'row',
    borderTopColor: 'black',
    elevation: 2,
    shadowColor: 'skyblue',
    // marginBottom: 0
    top: '40%',
    width:"100%",
    position: 'absolute', left: 0, right: 0, bottom: 0,
  }
  ,
  footerchild: {
    color: 'black'
  },
});
