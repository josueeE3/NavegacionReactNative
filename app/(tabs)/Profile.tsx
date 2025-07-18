import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import MeImage from '../../assets/images/me.png';


// Componente reutilizable CardEstudiante
function CardEstudiante({ nombre, edad, imagen }) {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.imagen} />
      <View style={styles.info}>
        <ThemedText type="title">{nombre}</ThemedText>
        <ThemedText>Edad: {edad}</ThemedText>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const navigation = useNavigation();

  const estudiante = {
    nombre: 'Josue Rodrigo Hernandez Jovel',
    edad: 22,
    imagen: MeImage, // Cambia la ruta por la imagen real
  };

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
      }
    >
      <ThemedView style={styles.container}>
        {/* Card personalizada con info del estudiante */}
        <CardEstudiante
          nombre={estudiante.nombre}
          edad={estudiante.edad}
          imagen={estudiante.imagen}
        />

        {/* Botón para regresar a la pantalla principal */}
        <Button title="Regresar" onPress={() => navigation.goBack()} />
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
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF9E5',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
});

