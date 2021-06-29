import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
// import NewsCard from "./component/NewsCard";
import FetchApi from "./component/FetchNews";
import Header from "./component/Header";

function App() {
  return (
    <View>
      <Header />
      <FetchApi />
    </View>
  );
}

export default App;
