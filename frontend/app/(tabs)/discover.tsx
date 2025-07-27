// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
// } from "react-native";

// export default function DiscoverScreen() {
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [routine, setRoutine] = useState<
//     { step: string; description: string; time: string }[] | null
//   >(null);

//   const handleSubmit = async () => {
//     if (!input) {
//       alert("Please describe your skin concern.");
//       return;
//     }

//     setLoading(true);
//     setRoutine(null);

//     try {
//       const res = await fetch("http://localhost:8000/generate-routine", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ concern: input }),
//       });

//       const data = await res.json();

//       if (data.error) throw new Error(data.error);

//       const formatted = [
//         ...data.morning.map((item: any) => ({
//           ...item,
//           time: "Morning",
//         })),
//         ...data.night.map((item: any) => ({
//           ...item,
//           time: "Night",
//         })),
//       ];

//       setRoutine(formatted);
//     } catch (err: any) {
//       alert("Failed to fetch routine: " + err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Describe Your Skin</Text>

//       <TextInput
//         style={styles.textArea}
//         multiline
//         numberOfLines={4}
//         placeholder="e.g., I have acne on my cheeks and dryness around my nose..."
//         value={input}
//         onChangeText={setInput}
//       />

//       <Button
//         title="Generate Routine"
//         onPress={handleSubmit}
//         disabled={loading}
//       />

//       {loading && <ActivityIndicator style={{ marginTop: 20 }} size="large" />}

//       {routine && (
//         <View style={styles.routineContainer}>
//           <Text style={styles.routineTitle}>Your AI Routine</Text>

//           {routine.map((item, index) => (
//             <View key={index} style={styles.routineStep}>
//               <Text style={styles.stepTitle}>
//                 [{item.time}] {item.step}
//               </Text>
//               <Text style={styles.productText}>{item.description}</Text>
//             </View>
//           ))}
//         </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     flexGrow: 1,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   textArea: {
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 6,
//     padding: 12,
//     marginBottom: 16,
//     minHeight: 100,
//     textAlignVertical: "top",
//   },
//   routineContainer: {
//     marginTop: 30,
//   },
//   routineTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   routineStep: {
//     marginBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//     paddingBottom: 8,
//   },
//   stepTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   productText: {
//     fontSize: 14,
//     color: "#555",
//   },
// });

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function DiscoverScreen() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [routine, setRoutine] = useState<
    { step: string; product: string }[] | null
  >(null);

  const handleSubmit = async () => {
    if (!input) {
      alert("Please describe your skin concern.");
      return;
    }

    setLoading(true);
    setRoutine(null);

    setTimeout(() => {
      setRoutine([
        { step: "Cleanser", product: "CeraVe Foaming Cleanser" },
        { step: "Toner", product: "Paula’s Choice BHA Liquid" },
        { step: "Moisturizer", product: "Neutrogena Hydro Boost" },
        { step: "Sunscreen", product: "Supergoop Unseen Sunscreen" },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Describe Your Skin</Text>

      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        placeholder="e.g., I have acne on my cheeks and dryness around my nose..."
        value={input}
        onChangeText={setInput}
      />

      <Button title="Generate Routine" onPress={handleSubmit} />

      {loading && <ActivityIndicator style={{ marginTop: 20 }} size="large" />}

      {routine && (
        <View style={styles.routineContainer}>
          <Text style={styles.routineTitle}>Your AI Routine</Text>
          {routine.map((item, index) => (
            <View key={index} style={styles.routineStep}>
              <Text style={styles.stepTitle}>{item.step}</Text>
              <Text style={styles.productText}>{item.product}</Text>
            </View>
          ))}
        </View>
      )}
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
    marginBottom: 12,
  },
  textArea: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    minHeight: 100,
    textAlignVertical: "top",
  },
  routineContainer: {
    marginTop: 30,
  },
  routineTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  routineStep: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  productText: {
    fontSize: 14,
    color: "#555",
  },
});
