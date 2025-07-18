import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


export default function WelcomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#CFF7DB", dark: "#1F3B2B" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">¡Bienvenido! al modulo de:</ThemedText>
        <HelloWave />
        <ThemedText>    
        </ThemedText>
        <ThemedText style={styles.tittle}>
          Desarrollo de Componentes para dispositivos móviles
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 170,
    width: 260,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    gap: 12,
    paddingTop: 20,
  },

  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 0,
    marginBottom: 0,
  },
});
