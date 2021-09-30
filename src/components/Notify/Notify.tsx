import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Notify() {
  return (
    <View style={notifyStyles.notifyContainer}>
      <Text>notifiche</Text>
    </View>
  );
}

const notifyStyles = StyleSheet.create({
  notifyContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
