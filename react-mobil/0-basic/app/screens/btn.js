import {StyleSheet, View, ScrollView, Button, Pressable, Text } from 'react-native';

export default function Btn() {
  return (
      <View style={styles.container}>
        <View style={styles.btn}>
          <Button title="Button" onPress={() => alert('Button')} />
          <Pressable onPress={() => alert('Pressable')} >
            <Text style={styles.press}>Pressable</Text>
          </Pressable>
        </View>
      </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{
    width:200,
  },
  press:{
    textAlign:'center',
    width:200,
    height:40,
    lineHeight:40
,   borderRadius:5,
    borderWidth:1,
    borderColor:'#ccc',
    marginTop: 20,
    fontSize:20,
    backgroundColor:'purple',
    color:'#fff',
    letterSpacing:2
  }
})