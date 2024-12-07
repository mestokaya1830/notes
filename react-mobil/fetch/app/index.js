import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

let limit = 10
export default function Index() {
  const [users, setUsers] = useState({});
  const [isLoading, setLoading] = useState(true);

  
  const getUsers = async () => {
    const result = await fetch(`http://localhost:3000`);
    const final = await result.json();
    setUsers(final.users);
    setLoading(false);
  };


  useEffect(() => {
    getUsers();
    console.log(users)
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="purple" barStyle="default" />
        <Text style={styles.textStyle}>React Native Fetch</Text>
        <FlatList
          data={users}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.list}>
                <Text>{item.name}</Text>
                <Text>{item.country}</Text>
              </View>
            );
          }}
          ListHeaderComponent={<Text>Users</Text>}
          ListFooterComponent={<Text>End Of Users</Text>}
          ItemSeparatorComponent={() => {
            <View style={{ height: 16 }}></View>;
          }}
          refreshing={getUsers}
        />
      </SafeAreaView>
    </View>
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
  },
  list: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f5f5f5",
  },
});
