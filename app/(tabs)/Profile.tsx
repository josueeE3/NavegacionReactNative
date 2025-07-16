import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FBECC1', dark: '#3A2F16' }}
      headerImage={
        <IconSymbol
          name="person.crop.circle.fill"
          size={260}
          color="#826A3F"
          style={styles.headerIcon}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Mi Perfil</ThemedText>
        <ThemedText>
          Josue Rodrigo Hernandez Jovel 20230357
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    position: 'absolute',
    bottom: -40,
    left: 0,
  },
  container: {
    gap: 12,
    paddingTop: 20,
  },
});
