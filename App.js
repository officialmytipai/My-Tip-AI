import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View style={{ flex: 1, justifyContent: "space-between", padding: 20 }}>
        <View>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
            My Tip AI
          </Text>

          <View
            style={{
              backgroundColor: "#1e293b",
              padding: 15,
              borderRadius: 15,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff" }}>
              👋 Hello! Ask me anything.
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#999"
            style={{
              flex: 1,
              backgroundColor: "#1e293b",
              color: "#fff",
              borderRadius: 12,
              paddingHorizontal: 15,
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "#2563eb",
              marginLeft: 10,
              paddingHorizontal: 20,
              justifyContent: "center",
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
