import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import AuthNavigator from './src/AuthNavigator';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <View>
    //   <Text>Raza</Text>
    // </View>

    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <AuthNavigator />
      {/* <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
