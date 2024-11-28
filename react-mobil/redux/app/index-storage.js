import { TextInput, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

//set
const setStore = async() => {
  try {
    await AsyncStorage.setItem('auth', JSON.stringify('Mesto Kaya'))
  } catch (error) {
    console.log(error)
  }
}

//get
const getStore = async() => {
  try {
    const result = await AsyncStorage.getItem('auth')
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
//delete
const deleteStore = async(key) => {
  try {
    AsyncStorage.clear()
  } catch (error) {
    console.log(error)
  }
}

export default function Index() {
  const [user, setUser] = useState();
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <TextInput />
        <Button title="Save" onPress={setStore}/>
        <Button title="Get" onPress={getStore}/>
      </View>
    </SafeAreaView>
  );
}
