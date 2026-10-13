import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import type { Article } from "../types";

export default function FullArticle() {
  const { article: articleParam } = useLocalSearchParams<{ article: string }>();
  const article = JSON.parse(articleParam) as Article;

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <Text style={styles.header}>Страница Полной Инфы</Text>
      <Image style={styles.img} source={{ uri: article.img }} />
      <Text style={styles.name}>{article.name}</Text>
      <Text style={styles.anons}>{article.anons}</Text>
      <Text style={styles.full}>{article.full}</Text>

      <Pressable style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Назад</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontFamily: "lora-bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  name: {
    fontFamily: "lora-bold",
    fontSize: 24,
    marginTop: 12,
  },
  anons: {
    fontFamily: "lora-it",
    fontSize: 18,
    marginTop: 6,
  },
  full: {
    fontFamily: "lora-reg",
    fontSize: 16,
    marginTop: 12,
    lineHeight: 24,
  },
  button: {
    marginTop: 24,
    height: 50,
    backgroundColor: "coral",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: "lora-bold",
    fontSize: 16,
  },
});
