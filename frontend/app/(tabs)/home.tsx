import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Routine Today</Text>

      <Text style={styles.sectionTitle}>🌤 Morning Routine</Text>
      <View style={styles.step}>
        <Text style={styles.stepText}>1. Cleanser – CeraVe Foaming</Text>
        <Text style={styles.stepText}>
          2. Moisturizer – Neutrogena Hydro Boost
        </Text>
        <Text style={styles.stepText}>3. Sunscreen – Supergoop SPF 40</Text>
      </View>

      <Text style={styles.sectionTitle}>🌙 Night Routine</Text>
      <View style={styles.step}>
        <Text style={styles.stepText}>1. Cleanser – CeraVe Hydrating</Text>
        <Text style={styles.stepText}>2. Serum – The Ordinary Niacinamide</Text>
        <Text style={styles.stepText}>3. Moisturizer – Vanicream</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 8,
  },
  step: {
    marginBottom: 12,
  },
  stepText: {
    fontSize: 16,
    marginBottom: 6,
  },
});
