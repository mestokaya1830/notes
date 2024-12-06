import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

export default function Indicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="purple" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
