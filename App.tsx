import { SafeAreaView, StyleSheet, Text } from "react-native";
import {
  MarkdownTextInput,
  parseExpensiMark,
} from "@expensify/react-native-live-markdown";
import React from "react";
import Animated from "react-native-reanimated";

export default function App() {
  const [text, setText] = React.useState("Hello, *world*!");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Animated.View>
        <MarkdownTextInput
          value={text}
          onChangeText={setText}
          parser={parseExpensiMark}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
