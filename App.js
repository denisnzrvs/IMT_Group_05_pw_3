import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "React application" }}
        />
        <Stack.Screen name="List View"
        component={FlatListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [counter, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="List View"
          onPress={() => navigation.navigate("List View")}
        />
      </View>
      <View style={styles.button}>
        <Button title="Increase count" onPress={() => setCount(counter + 1)} />
      </View>
      <View style={styles.button}>
        <Button title="Decrease count" onPress={() => setCount(counter - 1)} />
      </View>
      <View>
        <Text> Current count: {counter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin : 15,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  item: {
    padding: 16,
    fontSize: 40,
    color : "white",
  },
  itemBox: {
    backgroundColor: "lightslategray",
    padding: 5,
    borderRadius: 7,
    margin: 8,
  },
});

const list = [
  { name: "Tinky-Winky" },
  { name: "Dipsy" },
  { name: "Lala" },
  { name: "Po" },
  { name: "Sun" },
];

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.item}>{item.name} </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyStack;
