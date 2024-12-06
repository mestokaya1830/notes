import { Text, View, StyleSheet, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Logo from '../../assets/images/react-logo.png'
export default function Banner(props) {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={Logo} style={styles.banner} resizeMode="center" />
      <DrawerContentScrollView {...props} style={{backgroundColor:'purple'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  banner:{
    height:160,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'
  }
})