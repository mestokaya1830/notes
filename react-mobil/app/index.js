import { useState } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert
} from "react-native";
const logo = require("../assets/images/react-logo.png");
import Message from "./components/message";

export default function Home() {
  const [isModal, setModel] = useState(false);
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        <StatusBar backgroundColor="black" barStyle="default" />
        <Text style={styles.textStyle}>Welcome To React</Text>
        <Image source={logo} />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          width={380}
          height={300}
        />
        {/* <View style={styles.imageCon}>
          <ImageBackground source={logo} resizeMethod='cover' style={styles.imageCon}>
            <Text style = {styles.textStyle}>Welcome To React</Text>
          </ImageBackground>
        </View> */}

        <ActivityIndicator size="large" />

        <Text style={{ color: "#fff", padding: 20 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Button title="Button" onPress={() => alert("Hello")} />
        <Pressable onPress={() => alert("Pressable Area")}>
          <Text style={styles.textStyle2}>Click Here (Pressable)</Text>
        </Pressable>

        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <Button title="Open Model" onPress={() => setModel(true)} />
        </View>
        <Modal
          visible={isModal}
          animationType="fade"
          onRequestClose={() => setModel(false)}
        >
          <View style={styles.modalStyle}>
            <Text style={{ fontSize: 30 }}>Modal</Text>
          </View>
          <Button title="Close" onPress={() => setModel(false)} />
        </Modal>

        <Button
          title="Confirm"
          onPress={() =>
            Alert.alert("Invalid Date", "Some Message", [
              {
                text: "Cacnel",
                onPress: () => alert("Cancel Pressed"),
              },
              {
                text: "OK",
                onPress: () => alert("OK Pressed"),
              },
            ])
          }
        />
        <Message />
       <View style={styles.boxCon}>
        <View style={styles.box}>
            <Text>BOX SHADOW</Text>
          </View>
       </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "purple",
  },
  textStyle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  textStyle2: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  modalStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxCon:{
    flex: 1,
    padding: 20
  },
  box:{
    width:120,
    height: 120,
    backgroundColor: "#fff",
    margin: "auto",
    borderRadius:5,
    borderBlockColor: "#000",
    borderWidth: 5,
    shadowColor: "#000",
    shadowOffset:{
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    elevation: 10,
    shadowRadius: 4
  }
});
