import { SafeAreaView, StyleSheet } from 'react-native'
import List from "../components/list";

export default function Explore() {
  return (
    <SafeAreaView style={styles.container}>
       <List color="#00b4d8" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  }
});