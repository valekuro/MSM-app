/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PersonalizedButton from '../PersonalizedButton';
import theme from '../Theme';

interface EmptySectionProps {
  icon: any;
  buttonLabel?: string;
  iconLabel?: string;
  dimension?: number;
  primaryButtonDisabled?: boolean;
  showSecondaryButton: boolean;
  secondaryButtonLabel?: string;
  secondaryButtonDisabled?: any;
}

/**
 * the component is used when there are not data in some section
 * @param icon -- image that represents the empty section
 * @param buttonLabel -- primary button label
 * @param iconLabel -- text under icon that describes what happened
 * @param dimension -- image dimension (w x h)
 * @param primaryButtonDisabled -- Is button disabled?
 * @param showSecondaryButton -- if you need another button
 * @param secondaryButtonLabel -- secondary button label
 * @param secondaryButtonDisabled -- Is button disabled?
 * @returns 
 */
export default function EmptySection({
  icon,
  buttonLabel,
  iconLabel,
  dimension,
  showSecondaryButton,
  secondaryButtonLabel,
  primaryButtonDisabled,
  secondaryButtonDisabled,
}: EmptySectionProps) {
  return (
    <View style={emptySectionStyles.emptySectionContainer}>
      <Image
        source={icon}
        style={emptyImageStyle(dimension).imageStyleOptional}
      />
      <Text style={emptySectionStyles.labelEmptyStyle}>{iconLabel}</Text>
      {buttonLabel && (
        <PersonalizedButton
          label={buttonLabel}
          onPress={() => console.log('cioa')}
          disabled={primaryButtonDisabled ? primaryButtonDisabled : false}
        />
      )}
      {showSecondaryButton && secondaryButtonLabel && (
        <PersonalizedButton
          label={secondaryButtonLabel}
          onPress={() => console.log('cioa')}
          disabled={secondaryButtonDisabled}
        />
      )}
    </View>
  );
}

const emptySectionStyles = StyleSheet.create({
  emptySectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
  },
  labelEmptyStyle: {
    fontSize: theme.fonts.fontSizeEmptyLabel,
    color: `${theme.colors.darkGrey}`,
    textAlign: 'center',
  },
});

const emptyImageStyle = (dimension?: number) =>
  StyleSheet.create({
    imageStyleOptional: {
      width: dimension,
      height: dimension,
    },
  });
