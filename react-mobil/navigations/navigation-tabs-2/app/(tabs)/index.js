import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable
} from "react-native";
import { router, Link } from "expo-router";
import Logo from "../../assets/images/react-logo.png";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Home Page</Text>
      <ImageBackground source={Logo} style={styles.banner}></ImageBackground>
      <Link href="/usersf" style={styles.btn}>Go Users</Link>
      <Pressable onPress={() => router.push('/users')} >
        <Text style={styles.btn}>GO Users With Push</Text>
      </Pressable>
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
