import React from 'react';
import { Text, View } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
