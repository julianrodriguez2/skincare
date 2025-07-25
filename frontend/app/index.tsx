import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SkinAI</Text>
      <Text style={styles.subtitle}>Your AI-powered skincare assistant</Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => router.push("/login")} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => router.push("/signup")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    color: "#555",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 12,
  },
});
