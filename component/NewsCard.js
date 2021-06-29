import React from "react";
import {
  Image,
  Modal,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from "react-native";
import myCss from "../css";
function NewsCard(props) {
  return (
    <View>
      <View style={{marginTop: 70}}></View>
      <View style={myCss.newsCard}>
        <Image source={{uri: props.image}} style={myCss.newsImg} alt={"none"} />
        <View>
          <Text style={myCss.newsTitle} numberOfLines={3}>
            {props.title}
          </Text>
        </View>
        <View style={myCss.report}>
          <Text style={myCss.reportText} numberOfLines={3}>
            {props.report}
          </Text>

          <View style={myCss.readMoreBtn}>
            <Text onPress={props.myNativeBtn}> Read More </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default NewsCard;
