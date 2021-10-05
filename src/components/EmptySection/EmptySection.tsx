/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  GestureResponderEvent,
} from 'react-native';
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
  onPressPrimaryButton?: ((event: GestureResponderEvent) => void) | undefined;
  onPressSecondaryButton?: ((event: GestureResponderEvent) => void) | undefined;
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
 * @param onPressPrimaryButton -- primary button event
 * @param onPressSecondaryButton -- secondary button event
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
  onPressPrimaryButton,
  onPressSecondaryButton,
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
          onPress={onPressPrimaryButton}
          disabled={primaryButtonDisabled ? primaryButtonDisabled : false}
        />
      )}
      {showSecondaryButton && secondaryButtonLabel && (
        <PersonalizedButton
          label={secondaryButtonLabel}
          onPress={onPressSecondaryButton}
          disabled={secondaryButtonDisabled}
        />
      )}
    </View>
  );
}

const emptySectionStyles = StyleSheet.create({
  emptySectionContainer: {
    flex: 1,
    justifyContent: 'space-around',
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
