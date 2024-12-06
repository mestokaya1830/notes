import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import Banner from './components/banner'
import Home from "./screens/Home";
import About from "./screens/about";
import Contact from "./screens/contact";

const Drawer = createDrawerNavigator()

export default function Index() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Banner {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home Page",
          drawerLabelStyle: {
            fontSize: 18,
            fontFamily: 'Georgia',
          },
          drawerInactiveTintColor:'#fff',
          drawerActiveTintColor:'#000',
          drawerActiveBackgroundColor: "#ddd",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: "About Page",
          drawerLabelStyle: {
            fontSize: 18,
            fontFamily: 'Georgia',
          },
          drawerInactiveTintColor:'#fff',
          drawerActiveTintColor:'#000',
          drawerActiveBackgroundColor: "#ddd",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "Contact Page",
          drawerLabelStyle: {
            fontSize: 18,
            fontFamily: 'Georgia',
          },
          drawerInactiveTintColor:'#fff',
          drawerActiveTintColor:'#000',
          drawerActiveBackgroundColor: "#ddd",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
