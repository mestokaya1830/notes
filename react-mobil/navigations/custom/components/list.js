import { ScrollView, StyleSheet, View } from "react-native";


export default function List({color}) {
  return (
    <ScrollView style={StyleSheet.container}>
      {
        [1, 8.0, 0.5].map(item => (
          <View style={[styles.list, {backgroundColor: color, item}]} 
            key={item}
          />
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list:{
    width:'100%',
    height: 150,
    borderRadius:25,
    borderCurve:'continuous',
    marginBottom:15
  },
  container:{
    padding: 20
  }
})