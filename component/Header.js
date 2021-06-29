import React from "react";
import {Text, View} from "react-native";
import css from "../css";

function Header(props) {
  return (
    <View style={css.header}>
      <Text style={{color: "white", fontSize: 35}}> News Era App </Text>
    </View>
  );
}

export default Header;
