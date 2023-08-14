import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Hi This is Title 1", rating: 5, body: "Something", key: "1" },
    { title: "Hi This is Title 2", rating: 4, body: "Something", key: "2" },
    { title: "Hi This is Title 3", rating: 3, body: "Something", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}
