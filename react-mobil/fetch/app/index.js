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
  const [posts, setPosts] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  
  const getPosts = async (limit = 10) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const final = await result.json();
    setPosts(final);
    setLoading(false);
  };
  
  const handleRefresh = () => {
    setRefreshing(true)
    limit += 10
    console.log(limit)
    getPosts(limit)
    setRefreshing(false)
  }

  useEffect(() => {
    getPosts();
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
          data={posts}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.list}>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          ListHeaderComponent={<Text>Posts</Text>}
          ListFooterComponent={<Text>End Of Posts</Text>}
          ItemSeparatorComponent={() => {
            <View style={{ height: 16 }}></View>;
          }}
          refreshing={refreshing}
          onRefresh={handleRefresh}
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
