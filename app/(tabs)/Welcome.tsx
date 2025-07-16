import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

export default function WelcomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CFF7DB', dark: '#1F3B2B' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">¡Bienvenido!</ThemedText>
        <HelloWave />
        <ThemedText>
         Holaaa Bienvwenido esta es una pantalla de bienvenida 
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
    position: 'absolute',
  },
  container: {
    gap: 12,
    paddingTop: 20,
  },
});
