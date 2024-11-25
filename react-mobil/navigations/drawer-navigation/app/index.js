import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./settings/dashboard";
import Users from "./settings/users";

const Drawer = createDrawerNavigator();
export default function Index() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashbaord"
        component={Dashboard}
        options={{
          title: "Dashboard Page",
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "purple",
          drawerContentStyle: { backgroundColor: "red" },
        }}
      />
      <Drawer.Screen
        name="Users"
        component={Users}
        options={{
          title: "Users Page",
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "purple",
          drawerContentStyle: { backgroundColor: "red" },
        }}
      />
    </Drawer.Navigator>
  );
}
