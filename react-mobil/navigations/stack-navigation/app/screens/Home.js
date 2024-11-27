import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <View style={styles.button}>
        <Button  title="About Page" onPress={() => navigation.navigate('About', {name: 'Mesto'})} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
  }
})