import { useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Users() {
  const {id} = useLocalSearchParams()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Users Details {id}</Text>
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
  }
});
