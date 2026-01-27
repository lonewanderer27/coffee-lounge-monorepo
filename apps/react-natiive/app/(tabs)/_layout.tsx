import React from 'react';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { IconSymbol } from '@/components/ui/icon-symbol';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf="cup.and.saucer" />
        <Label>Order</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Icon sf="sunglasses" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="me">
        <Icon sf="person.crop.circle" />
        <Label>Me</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
