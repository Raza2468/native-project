import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './StartScreen';
import Homescreen from './Homescreen';
import Notification from './Notification';
import Setting from './Setting';
import VideoScreen from './Video';
import Devicescreen from './Devicescreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Footer() {

  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator
        // initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      // screenOptions={{
      //   tabBarActiveTintColor: 'skyblue',
      // }}
      >
        <Tab.Screen name='home' component={Homescreen}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen name='devicescreen' component={Devicescreen}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="video" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='notification'
          component={Notification}
          options={{
            tabBarLabel: 'notifications',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" color={color} size={30} />
            ),
          }}

        />
        <Tab.Screen name='setting' component={Setting} 
           options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={30} />
            ),
          }}
        />
        {/* <Tab.Screen name={Devicescreen} component={Devicescreen} />
        <Tab.Screen name={settingsName} component={SettingScreen} /> */}
      </Tab.Navigator>
      {/* </NavigationContainer> */}
      {/* <View style={styles.containerfooter}>

        <AntDesign name="home" size={30} color="gray" onPress={() => navigation.navigate('Homescreen')} />
        <FontAwesome5 name="video" size={30} color="gray" onPress={() => navigation.navigate('Devicescreen')} />
        <Ionicons name="notifications-outline" size={30} color="gray" onPress={() => navigation.navigate('Notification')} />
        <AntDesign name="user" size={30} color="gray" onPress={() => navigation.navigate('SettingScreen')} />

      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  containerfooter: {
    // backgroundColor: 'green',
    // display: "flex",
    backgroundColor: "#F5F5F5",
    justifyContent: 'space-evenly',
    alignItems: "center",
    height: 70,
    flexDirection: 'row',
    borderTopColor: 'black',
    elevation: 2,
    shadowColor: 'skyblue',
    // marginBottom: 0
    // top: '40%',
    bottom: "-10%",
    width: "100%",
    // position: 'absolute', 
    left: 0, right: 0, bottom: 10,
  }
  ,
  footerchild: {
    color: 'black'
  },
});
