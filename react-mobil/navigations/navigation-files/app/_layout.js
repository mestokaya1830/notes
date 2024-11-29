import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        title:"Home Page"
      }} />
      <Stack.Screen name='users' options={{
        title:'Users Page'
      }} />
      <Stack.Screen name='users/[id]' options={{
        title:'Users Details'
      }} />
    </Stack>
  )
}
