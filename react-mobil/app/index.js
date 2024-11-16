import {View, ScrollView, StatusBar, Text, Button , StyleSheet, Image, ImageBackground} from 'react-native';
const logo = require('../assets/images/react-logo.png')

export default function Home() {
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        {/* <StatusBar style="auto" /> */}
        <Text style={styles.textStyle}>Welcome To React</Text>
        <Image  source={logo} />
        <Image  source={{uri : "https://picsum.photos/200/300"}} width={380} height={300} />
        {/* <View style={styles.imageCon}>
          <ImageBackground source={logo} resizeMethod='cover' style={styles.imageCon}>
            <Text style = {styles.textStyle}>Welcome To React</Text>
          </ImageBackground>
        </View> */}
        
        <Text style={{color: '#fff', padding: 20}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Button title="Click" onPress={() => alert('Hello')}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple'
  },
  textStyle:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  }
})