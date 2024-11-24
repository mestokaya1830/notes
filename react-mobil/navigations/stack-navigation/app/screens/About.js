import React from 'react'
import { View, Text } from 'react-native'

export default function About({route}) {
  const {name} = route.params
  return (
    <View>
      <Text>About Page</Text>
      <Text>Name Come from Home {name}</Text>
    </View>
  )
}