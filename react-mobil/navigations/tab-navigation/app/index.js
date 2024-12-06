import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import List from "../components/list";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
     <List color="#0096c7" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  }
});
