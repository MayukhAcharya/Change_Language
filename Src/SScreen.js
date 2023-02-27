import { View, Text, StyleSheet } from "react-native";
import React from "react";
import i18n from "../Languages/i18n";

export default function SScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: "600" }}>Lorem Ipsum</Text>
      <Text style={{ margin: 10 }}>{i18n.t("Text2")}</Text>
      <Text>{i18n.t("Screen_Name2")}</Text>
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
