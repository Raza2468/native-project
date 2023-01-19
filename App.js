import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import AuthNavigator from './src/AuthNavigator';
import CalenderScreen from './src/Component/Calendar';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Footer from './src/Component/Footer';
// https://oblador.github.io/react-native-vector-icons/

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    // <>
    //   <Footer />
    // </>

    <NavigationContainer
    options={{headerShown: false}}
    >
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Footer"
          component={Footer}
          options={{headerShown: false}}
        />
    
      </Stack.Navigator>  */}
      <AuthNavigator />
     {/* <Stack.Navigator> */}
        {/* <Stack.Screen name="detail" component={Detail} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
