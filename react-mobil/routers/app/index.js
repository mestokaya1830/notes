import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from "./screens/About";
const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  }
});
