import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SectionList,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Button
} from "react-native";
import { useState } from "react";
import logo from "../assets/images/react-logo.png";
import Icon from "../assets/images/adaptive-icon.png";
import Message from "./components/message";
import Users from "../assets/users.json";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

//SafeAreaView for ios top padding
export default function Index() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [isMode, setMode] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {}
    if(!username){
      errors.username = 'Username is required'
    } else if(!pass){
      errors.pass = 'Pass is required'
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handelLogin = () => {
    if(validateForm()){
      console.log(username, pass)
      setUsername("")
      setPass("")
      setErrors({})
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="purple" barStyle="default" />

          <Text style={styles.textStyle}>React Native</Text>

          <Image source={logo} width="100" height="100" />

          <Message msg="From Component" />

          <ImageBackground source={Icon} style={styles.bg}>
            <Text style={{ color: "red", fontSize: 30 }}>
              Image Backcground
            </Text>
          </ImageBackground>

          <Text style={styles.textStyle}>Lists</Text>
          <View>
            {Users.map((item) => (
              <View key={item.id} style={styles.list}>
                <Text style={styles.listText}>{item.id}</Text>
                <Text style={styles.listText}>{item.name}</Text>
                <Text style={styles.listText}>{item.country}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.textStyle}>SectionList</Text>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <Text style={styles.listText}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.title}>{title}</Text>
            )}
          />
         
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Username"
            />
            {errors.username ? (<Text>{errors.username}</Text>) : null}
            <TextInput
              style={styles.input}
              value={pass}
              onChangeText={setPass}
              secureTextEntry
              keyboardType="numeric"
              placeholder="Password"
            />
            {errors.pass ? (<Text>{errors.pass}</Text>) : null}
            
            <TextInput placeholder="Message"  multiline style={styles.textarea} />
         
          <Button title="Login" onPress={handelLogin}/>
          <Text style={{width:300,fontSize: 24}}>{username} / {pass}</Text>
          <View style={{width: 300, flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:5}}>
            <Text style={{width:100}}>Dark Mode</Text>
            <Switch 
              value={isMode} 
              onValueChange={() => setMode((item) => !item)}
              trackColor={{false: '#ccc', true: 'green'}}
              thumbColor="lightblue"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
console.log(w);
console.log(h);
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 30 : 20,
    // or
    ...Platform.select({
      ios: {
        fontSize: 20,
        color: "red",
      },
      android: {
        fontSize: 30,
        color: "purple",
      },
    }),
  },
  bg: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 260,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:5,
    },
    elevation:5
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 5,
    marginTop: 3,
  },
  listText: {
    width: 100,
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    color: "brown",
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 18
  },
  textarea:{
    width: 300,
    minHeight:100,
    verticalAlign: "top",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginTop:10
  }
});
