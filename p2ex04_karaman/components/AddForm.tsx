import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik, FormikHelpers } from "formik";
import { NewArticle } from "../types";

type AddFormProps = {
  addArticle: (newArticle: NewArticle) => void;
};

export default function AddForm(props: AddFormProps) {
  const initialValues: NewArticle = {
    name: "",
    anons: "",
    full: "",
    img: "",
  };

  const onFormikSubmitHandler = (
    values: NewArticle,
    action: FormikHelpers<NewArticle>
  ) => {
    console.log("onFormikSubmitHandler values", values);
    props.addArticle(values);
    action.resetForm();
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onFormikSubmitHandler}>
        {(formikProps) => (
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.input}
              value={formikProps.values.name}
              placeholder="Введите название"
              onChangeText={formikProps.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={formikProps.values.anons}
              placeholder="Введите анонс"
              onChangeText={formikProps.handleChange("anons")}
            />
            <TextInput
              style={[styles.input, styles.inputMultiline]}
              value={formikProps.values.full}
              placeholder="Введите полный текст"
              multiline
              onChangeText={formikProps.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={formikProps.values.img}
              placeholder="Ссылка на картинку (URL)"
              autoCapitalize="none"
              onChangeText={formikProps.handleChange("img")}
            />
            <Pressable
              onPress={formikProps.handleSubmit as () => void}
              style={styles.pressableButton}
            >
              <Text style={styles.buttonText}>Сохранить статью</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textInputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontFamily: "lora-reg",
    fontSize: 16,
    backgroundColor: "blanchedalmond",
  },
  inputMultiline: {
    height: 120,
    textAlignVertical: "top",
  },
  pressableButton: {
    height: 50,
    width: "80%",
    marginTop: 12,
    alignSelf: "center",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontFamily: "lora-bold",
    fontSize: 16,
  },
});
