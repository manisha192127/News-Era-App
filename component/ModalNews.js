import React, {useState} from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Touchable,
  Button,
  Image,
  ScrollView,
} from "react-native";
import css from "../css";

function ModalNews(props) {
  const [myCloseModal, setCloseModal] = useState();
  // const closeModal = myCloseModal => {
  //   setCloseModal("done");
  //   alert(myCloseModal);
  // };

  return (
    <View style={[css.modalCard, {display: props.displayCard}]}>
      <ScrollView scrollEnabled>
        <View style={css.cancelBtn}>
          <Button title={"x"} onPress={props.closeModal} />
        </View>

        <View style={css.modalNewsTitle}>
          <Text style={css.titleText}> {props.title} </Text>
        </View>

        <Image source={{uri: props.myModalImages}} style={css.modalNewsimg} />

        <View>
          <Text style={css.pureReport}> {props.pureReport} </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default ModalNews;
