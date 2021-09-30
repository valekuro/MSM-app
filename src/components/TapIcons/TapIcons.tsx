/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {GestureResponderEvent} from 'react-native';
import theme from '../Theme';
interface TapIconsProps {
  fullIcon: IconDefinition;
  emptyIcon: IconDefinition;
  isTapped: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
/**
 * Icon that change on tap
 * @param fullIcon -- full icon
 * @param emptyIcon -- empty icon
 * @param isTapped -- check if is tapped
 * @param onPress -- onpress event
 * @returns
 */
export default function TapIcons({
  fullIcon,
  emptyIcon,
  isTapped,
  onPress,
}: TapIconsProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon
        icon={isTapped ? fullIcon : emptyIcon}
        style={tapIconsStyles.iconCommonStyle}
        size={25}
      />
    </TouchableOpacity>
  );
}

export const tapIconsStyles = StyleSheet.create({
  iconCommonStyle: {
    color: theme.colors.darkOrange,
    backgroundColor: 'transparent',
  },
});
