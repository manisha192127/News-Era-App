import React, {useState, useEffect} from "react";
import {Alert, FlatList, Modal, Text, View} from "react-native";
import NewsCard from "./NewsCard";
import ModalNews from "./ModalNews";

function FetchNews() {
  const [newsData, setNewsData] = useState([]);
  const [modalAction, setModalAction] = useState("none");

  const [imgData, setImgData] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [myPureReport, setMyPureReport] = useState();

  const getDetails = async () => {
    const myNews = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=f7671a2d67c44e7c94902cb4af9975cf"
    );
    const newsJson = await myNews.json();
    setNewsData(newsJson.articles);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const myModalBtn = myInd => {
    setModalAction("flex");
    setImgData(newsData[myInd]["urlToImage"]);
    setModalTitle(newsData[myInd]["title"]);
    setMyPureReport(newsData[myInd]["description"]);
  };
  console.log(imgData);
  const closeModal = () => {
    setModalAction("none");
  };

  return (
    <View>
      <ModalNews
        displayCard={modalAction}
        closeModal={closeModal}
        myModalImages={imgData}
        title={modalTitle}
        pureReport={myPureReport}
      />

      <FlatList
        data={newsData}
        renderItem={({item, index}) => {
          return (
            <Text>
              <NewsCard
                key={index}
                title={item.title}
                image={item.urlToImage}
                report={item.description}
                myNativeBtn={() => myModalBtn(index)}
              />
            </Text>
          );
        }}
      />
    </View>
  );
}

export default FetchNews;
