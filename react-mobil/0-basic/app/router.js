import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Indicator from "./screens/indicator";
import Btn from "./screens/btn";

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Indicator"
        component={Indicator}
        options={{
          title: "Indicator Page",
          drawerLabelStyle: {
            fontSize: 18,
            fontFamily: "Georgia",
          },
          drawerContentStyle: { backgroundColor: "purple" },
          drawerInactiveTintColor: "#fff",
          drawerActiveTintColor: "#000",
          drawerActiveBackgroundColor: "#ddd",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Btn"
        component={Btn}
        options={{
          title: "Button Page",
          drawerLabelStyle: {
            fontSize: 18,
            fontFamily: "Georgia",
          },
          drawerContentStyle: { backgroundColor: "purple" },
          drawerInactiveTintColor: "#fff",
          drawerActiveTintColor: "#000",
          drawerActiveBackgroundColor: "#ddd",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
