import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';


export default function Signup() {

  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (

    <View style={styles.main}>
      <View style={styles.logincontainer}>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />

        <View style={styles.loginform}>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="I.P xxx"

          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Username"

          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="visible-password"
          />

          <Text style={styles.forget}>Forget Password?</Text>
          <View style={styles.signbtn}>
            <Button title="Sign in"
              color="#1877F2"
              style={styles.btn}
              onPress={() => navigation.navigate('Homescreen')}
            />
          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    padding: 40,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  logincontainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    padding: 20,
    elevation: 9,
    shadowColor: 'gray',
    borderRadius: 15,

  },
  tinyLogo: {
    width: "90%",
    height: 100,
  },
  loginform: {
    width: "100%",
    height: "100%",
    marginTop: 30,

  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: 70,
  },
  forget: {
    color: "gray",
    marginLeft: "55%",
    marginTop: 2,
  },

  signbtn: {
    width: "60%",
    height: 40,
    marginTop: 15,
    alignSelf: "center"
  },
  btn: {
    borderRadius: 150,
  },



})