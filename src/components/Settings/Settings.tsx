/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import EmptySection from '../EmptySection';
import theme from '../Theme';

/**
 * Group settings
 * @returns 
 */
export default function Settings() {
  return (
    <View style={appoggioStyles.appoggioContainer}>
      <EmptySection
        icon={require('../../assets/images/addGroup.png')}
        buttonLabel={'Nuovo Gruppo'}
        iconLabel={`Non fai parte di nessun gruppo.\nCreane uno tu!`}
        dimension={250}
        primaryButtonDisabled={false}
        showSecondaryButton={false}

      />
    </View>
  );
}

const appoggioStyles = StyleSheet.create({
  appoggioContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: `${theme.colors.white}`,
  },
});
