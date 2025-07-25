import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

const SKIN_TYPES = ["dry", "oily", "combo", "sensitive"];
const CONCERNS = ["acne", "redness", "dryness", "dark spots"];
const BUDGETS = ["low", "mid", "high"];

export default function OnboardingScreen() {
  const [skinType, setSkinType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [concerns, setConcerns] = useState<string[]>([]);

  const toggleConcern = (concern: string) => {
    setConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern]
    );
  };

  const handleSubmit = () => {
    if (!skinType || !budget || concerns.length === 0) {
      alert("Please fill out all fields.");
      return;
    }
    router.replace("/(tabs)/home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let’s personalize your skincare</Text>

      <Text style={styles.label}>Skin Type</Text>
      <View style={styles.optionsRow}>
        {SKIN_TYPES.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.optionButton,
              skinType === type && styles.selectedOption,
            ]}
            onPress={() => setSkinType(type)}
          >
            <Text style={styles.optionText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Concerns</Text>
      <View style={styles.optionsGrid}>
        {CONCERNS.map((concern) => (
          <TouchableOpacity
            key={concern}
            style={[
              styles.optionButton,
              concerns.includes(concern) && styles.selectedOption,
            ]}
            onPress={() => toggleConcern(concern)}
          >
            <Text style={styles.optionText}>{concern}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Budget</Text>
      <View style={styles.optionsRow}>
        {BUDGETS.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.optionButton,
              budget === level && styles.selectedOption,
            ]}
            onPress={() => setBudget(level)}
          >
            <Text style={styles.optionText}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.submitContainer}>
        <Button title="Continue" onPress={handleSubmit} />
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
    fontWeight: "600",
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  optionText: {
    color: "#000",
  },
  submitContainer: {
    marginTop: 30,
  },
});
