import { SafeAreaView, StyleSheet } from 'react-native'
import List from "../components/list";

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
       <List color="#bb9457" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  }
});