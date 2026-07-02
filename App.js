import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        🤖 My Tip AI
      </Text>

      <TextInput
        placeholder="Type your message..."
        placeholderTextColor="#888"
        style={{
          backgroundColor: "#1e293b",
          color: "#fff",
          padding: 15,
          borderRadius: 12,
          marginBottom: 15,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#2563eb",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Send
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
