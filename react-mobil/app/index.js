
import { Text, View, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
      <Text style = {styles.textStyle}>Welcome React</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle:{
    textAlign: "center",
    width: "100%",
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: "#000",
    paddingTop: 10,
    paddingBottom: 10
  }
})