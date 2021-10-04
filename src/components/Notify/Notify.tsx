import React from 'react';
import {View, StyleSheet} from 'react-native';
import EmptySection from '../EmptySection';
import theme from '../Theme';
export default function Notify() {
  return (
    <View style={notifyStyles.notifyContainer}>
      <EmptySection
        icon={require('../../assets/images/wip.png')}
        iconLabel={`Work in progress.\nLa scimmiette stanno sviluppando!\nRiprova tra qualche giorno!`}
        showSecondaryButton={false}
        dimension={220}
      />
    </View>
  );
}

const notifyStyles = StyleSheet.create({
  notifyContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: `${theme.colors.white}`,
  },
});
