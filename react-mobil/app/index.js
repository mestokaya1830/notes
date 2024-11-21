import { SafeAreaView, StyleSheet, View, Text, Dimensions , Image, Platform} from 'react-native';
import logo from '../assets/images/react-logo.png'

//SafeAreaView for ios top padding
export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          <Text style={styles.textStyle}>React Native</Text>
          <Image source={logo} width="100" height="100" />
      </View>
    </SafeAreaView>
  )
}

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
console.log(w)
console.log(h)
const styles = StyleSheet.create({
  safeArea:{
    flex: 1
  },
  container:{
    flex: 1,
    alignItems:"center"
  },
  textStyle: {
    textAlign:"center",
    marginTop:30,
    fontWeight:"bold",
    fontSize: Platform.OS === 'android' ? 30 : 20,
    // or
    ...Platform.select({
      ios:{
        fontSize:20,
        color: 'red'
      },
      android:{
        fontSize:30,
        color: 'purple'
      }
    })
  }
})