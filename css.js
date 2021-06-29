import {StyleSheet} from "react-native";
const css = StyleSheet.create({
  newsCard: {
    width: 300,
    height: 380,
    backgroundColor: "black",
    margin: 10,
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },

  newsTitle: {
    backgroundColor: "white",
    color: "black",
    padding: 4,
    textAlign: "justify",
    
  },

  report: {
    padding: 5,
  },

  reportText: {
    color: "grey",
    fontFamily: "cursive",
  },

  newsImg: {
    width: 300,
    height: 200,
  },

  readMoreBtn: {
    width: 200,
    height: 60,
    color: "white",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },

  modalCard: {
    width: 400,
    height: "80vh",
    backgroundColor: "black",
    top: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 60,
  },

  cancelBtn: {
    position: "absolute",
    zIndex: 99,
    width: 30,
    height: 30,
    right: 10,
    top: 10,
  },

  modalNewsimg: {
    height: 200,
    width: "100%",
    top: 0,
    padding: 0,
    margin: 0,
  },

  modalNewsTitle: {
    maxHeight: 100,
    backgroundColor: "white",
    color: "black",
  },

  titleText: {
    padding: 4,
    fontSize: 18,
    fontFamily: "san Serif cursive",
  },

  pureReport: {
    color: "white",
    padding: 5,
  },

  header: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    height: 60,
    backgroundColor: "black",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    color: "white",
    zIndex: 9999,
  },
});

export default css;
