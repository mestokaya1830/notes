import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import { Ionicons } from '@expo/vector-icons';
import Chat from './components/chat';
const Tabs = createBottomTabNavigator();

export default function Index() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: "Georgia",
            fontWeight: 300,
          },
          
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
      />
      <Tabs.Screen
        name="Contact"
        component={Contact}
      />
      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" color={color} size={size} />
          ),
          tabBarBadge: 3
        }}
      />
    </Tabs.Navigator>
  );
}
