import { SafeAreaView, StyleSheet } from 'react-native'
import List from "../components/list";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <List color="#83c5be" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  }
});