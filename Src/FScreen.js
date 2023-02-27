import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import i18n from "../Languages/i18n";

export default function FScreen({ navigation }) {
  const [language, setLanguage] = useState("en");

  i18n.locale = language; // Set the current language globally

  const changeLanguageToBengali = () => {
    setLanguage("bn"); // Update the language state
  };

  const changeLanguageToEnglish = () => {
    setLanguage("en"); // Update the language state
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: "600" }}>Lorem Ipsum</Text>
      <Text>{i18n.t("Screen_Name1")}</Text>
      <Text style={{ margin: 10 }}>{i18n.t("Text1")}</Text>
      <Button title="Press" onPress={() => navigation.navigate("second")} />
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: 200,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
        onPress={changeLanguageToBengali}
      >
        <Text style={{ color: "white" }}>Bengali</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: 200,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
        onPress={changeLanguageToEnglish}
      >
        <Text style={{ color: "white" }}>English</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
