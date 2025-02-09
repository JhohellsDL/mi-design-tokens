import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TamaguiProvider } from '@tamagui/core';
import config from '../../tamagui.config';
import { colors, typography, spacing } from '../../src';

const ExampleComponent = () => {
  return (
    <View style={{ padding: spacing.medium }}>
      <Text
        style={{
          color: colors.primary,
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize.large,
        }}
      >
        Hola, este es un ejemplo de texto.
      </Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <TamaguiProvider config={config}>
     <ExampleComponent />
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
