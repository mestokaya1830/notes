import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";

export default function Users() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Users Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 300,
    margin: 10,
  },
  textStyle:{
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
    margin: 20
  },
  btn:{
    height: 30,
    backgroundColor:'lightblue',
    fontSize:20,
    margin: 10
  }
});
