import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import AddForm from "./AddForm";
import { initialNews } from "../data/news";
import { Article, NewArticle } from "../types";

export default function Main() {
  const [news, setNews] = useState<Article[]>(initialNews);
  const [modalVisible, setModalVisible] = useState(false);

  function addArticle(newArticle: NewArticle) {
    setNews((list) => {
      const newArticleWithKey: Article = {
        ...newArticle,
        key: Math.random().toString(),
      };
      return [newArticleWithKey, ...list];
    });
    setModalVisible(false);
  }

  return (
    <View style={styles.main}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <AntDesign
            name="close-circle"
            size={32}
            color="red"
            style={styles.closeIcon}
            onPress={() => setModalVisible(false)}
          />
          <Text style={styles.header}>Добавление статьи</Text>
          <AddForm addArticle={addArticle} />
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Ionicons name="add-circle" size={32} color="green" />
      </Pressable>

      <Text style={styles.header}>Страница Главная</Text>

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              router.push({
                pathname: "/article",
                params: { article: JSON.stringify(item) },
              })
            }
          >
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  modal: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
  addButton: {
    alignSelf: "center",
    marginBottom: 8,
  },
  header: {
    fontFamily: "lora-bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
  item: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fdf3e7",
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  name: {
    fontFamily: "lora-bold",
    fontSize: 20,
    marginTop: 8,
  },
  anons: {
    fontFamily: "lora-it",
    fontSize: 16,
    marginTop: 4,
  },
});
