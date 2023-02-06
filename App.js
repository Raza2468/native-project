import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import AuthNavigator from './src/AuthNavigator';
import CalenderScreen from './src/Component/Calendar';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Footer from './src/Component/Footer';
import Statusscreen from './src/Component/Statusscreen';
import VideoScreen from './src/Component/Video';
import Setting from './src/Component/Setting';
import Domi from './src/Component/domi';
// https://oblador.github.io/react-native-vector-icons/

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    // <>
    //   <VideoScreen />
    // </>

    <NavigationContainer options={{headerShown: false}}>
      {/* <CalenderScreen /> */}
      {/* <VideoScreen /> */}
      {/* <Domi /> */}
      <AuthNavigator />
    </NavigationContainer>

    //   {/* <Stack.Navigator>
    //     <Stack.Screen
    //       name="Footer"
    //       component={Footer}
    //       options={{headerShown: false}}
    //     />

    //   </Stack.Navigator>  */}
    //  {/* <Stack.Navigator> */}
    //     {/* <Stack.Screen name="detail" component={Detail} /> */}
    // {/* </Stack.Navigator> */}
  );
};

export default App;
