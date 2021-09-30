/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import EmptySection from '../EmptySection';
import theme from '../Theme';

/**
 * WIP -- List section 
 * @returns 
 */
export default function List() {
  return (
    <View style={listStyles.listContainer}>
      <EmptySection
        icon={require('../../assets/images/list.png')}
        buttonLabel={'Crea Lista'}
        iconLabel={`Non è presente nessuna lista creata.\nScegli un'azione.`}
        dimension={220}
        primaryButtonDisabled={false}
        showSecondaryButton={true}
        secondaryButtonLabel={'Usa ultima lista bloccata'}
        secondaryButtonDisabled={true}
      />
    </View>
  );
}

const listStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: `${theme.colors.white}`,
  },
});
