import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {GestureResponderEvent} from 'react-native';

import theme from '../Theme';
interface GoBackBarProps {
  icon: IconDefinition;
  label: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
export default function GoBackBar({icon, label, onPress}: GoBackBarProps) {
  return (
    <View style={goBackBarStyle.goBackBarContainer}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={icon} />
      </TouchableOpacity>
      <Text style={goBackBarStyle.textGoBackStyle}>{label}</Text>
    </View>
  );
}

const goBackBarStyle = StyleSheet.create({
  goBackBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.lightOrange,
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  textGoBackStyle: {
    marginLeft: 40,
    fontWeight: '500',
    fontSize: 21,
  },
});
