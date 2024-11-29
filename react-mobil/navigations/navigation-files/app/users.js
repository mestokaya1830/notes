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
      <Link href="/users/1" style={styles.btn}>Go Users Details With Link</Link>
      <Pressable onPress={() => router.push('/users/2')} >
        <Text style={styles.btn}>GO Users Details With Push</Text>
      </Pressable>
      <Link href="/users/mesto" style={styles.btn}>Go Users Details With String</Link>
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
